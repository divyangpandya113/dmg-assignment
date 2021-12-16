import { visitAddNewComputer, addComputerForm, notification } from "./app.utils";

describe("Add new computer", () => {
  beforeEach(() => {
    visitAddNewComputer();
  });

  context("with invalid FormData", () => {
    const name = "RamdonName";
    it("Rejects empty form", () => {
      cy.get('form').submit();
      cy.get("#name").closest("div.clearfix").should("have.class", "error");
    });

    it("Entering wrong introduced date", () => {
      cy.get("#name").type(name);
      cy.get("#introduced").type("20-03-2011");
      cy.get('form').submit();
      cy.get("#introduced").closest("div.clearfix").should("have.class", "error");
    });

    it("Entering wrong discontinued date", () => {
      cy.get("#name").type(name);
      cy.get("#discontinued").type("20-07-2023");
      cy.get('form').submit();
      cy.get("#discontinued").closest("div.clearfix").should("have.class", "error");
    });
  });

  context("with valid FormData", () => {
    const name = "RamdonName"
    it("Submits sucessfully with just name", () => {

      cy.get("#name").type(name);

      addComputerForm().submit();
      notification().should(
        "contain",
        `Done! Computer ${name} has been created`
      );
    });

    it("Entering introduced date", () => {
      cy.get("#name").type(name);
      cy.get("#introduced").type("2021-03-11");
      addComputerForm().submit();
      notification().should(
        "contain",
        `Done! Computer ${name} has been created`
      );
    });

    it("Entering Discontinued date", () => {
      cy.get("#name").type(name);
      cy.get("#discontinued").type("2021-07-11");
      addComputerForm().submit();
      notification().should(
        "contain",
        `Done! Computer ${name} has been created`
      );
    });

    it("Selects company from the drop-down", () => {
      cy.get("#name").type(name);
      cy.get("select").select("ASUS");
      addComputerForm().submit();
      notification().should(
        "contain",
        `Done! Computer ${name} has been created`
      );
    });

    it("Submits all the field of FormData", () => {
      cy.get("#name").type(name);
      cy.get("#introduced").type("2021-03-11");
      cy.get("#discontinued").type("2021-07-11");
      cy.get("select").select("ASUS");
      addComputerForm().submit();
      notification().should(
        "contain",
        `Done! Computer ${name} has been created`
      );
    });
  });
});
