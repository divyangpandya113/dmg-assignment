import { visitAddNewComputer, addComputerForm, notification } from "./app.utils";
import { sample } from "lodash";
import { Computer } from '../types';

describe("Add new computer", () => {
  let computer: Computer;
  beforeEach(() => {
    cy.fixture("computers").then((data: Computer[]) => {
      computer = sample(data)
    });
    visitAddNewComputer();
  });

  context("with invalid FormData", () => {

    it("Rejects empty form", () => {
      cy.get('form').submit();
      cy.get("#name").closest("div.clearfix").should("have.class", "error");
    });

    it("Entering wrong introduced date", () => {
      cy.get("#name").type(computer.name);
      cy.get("#introduced").type("20-03-2011");
      cy.get('form').submit();
      cy.get("#introduced").closest("div.clearfix").should("have.class", "error");
    });

    it("Entering wrong discontinued date", () => {
      cy.get("#name").type(computer.name);
      cy.get("#discontinued").type("20-07-2023");
      cy.get('form').submit();
      cy.get("#discontinued").closest("div.clearfix").should("have.class", "error");
    });
  });

  context("with valid FormData", () => {

    it("Submits sucessfully with just name", () => {

      cy.get("#name").type(computer.name);

      addComputerForm().submit();
      notification().should(
        "contain",
        `Done! Computer ${computer.name} has been created`
      );
    });

    it("Entering introduced date", () => {
      cy.get("#name").type(computer.name);
      cy.get("#introduced").type(computer.introducedDate);
      addComputerForm().submit();
      notification().should(
        "contain",
        `Done! Computer ${computer.name} has been created`
      );
    });

    it("Entering Discontinued date", () => {
      cy.get("#name").type(computer.name);
      cy.get("#discontinued").type(computer.discontinuedDate);
      addComputerForm().submit();
      notification().should(
        "contain",
        `Done! Computer ${computer.name} has been created`
      );
    });

    it("Selects company from the drop-down", () => {
      cy.get("#name").type(computer.name);
      cy.get("select").select(computer.companyName);
      addComputerForm().submit();
      notification().should(
        "contain",
        `Done! Computer ${computer.name} has been created`
      );
    });

    it("Submits all the field of FormData", () => {
      cy.get("#name").type(computer.name);
      cy.get("#introduced").type(computer.introducedDate);
      cy.get("#discontinued").type(computer.discontinuedDate);
      cy.get("select").select(computer.companyName);
      addComputerForm().submit();
      notification().should(
        "contain",
        `Done! Computer ${computer.name} has been created`
      );
    });
  });
});
