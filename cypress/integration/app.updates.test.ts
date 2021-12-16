import { config } from "../config";
import { notification, visitAddNewComputer } from '../support/app.utils';
import { sample } from 'lodash';
import { Computer } from '../types';

describe("View and updating testing", () => {

  let computer: Computer;
  beforeEach(() => {
    cy.fixture("computers").then((data: Computer[]) => {
      computer = sample(data)
    });
  });

  it("Viewing data and updating name of computer", () => {
    cy.visit(config.homepageUrl);
    cy.get("#searchbox").type(computer.name);
    cy.get('input[type="submit"]').click();
    cy.get("table tbody td")
      .eq(0)
      .get("tr")
      .eq(1)
      .contains("a", computer.name)
      .click();
    cy.get("#name").clear();
    cy.get('input[value="Save this computer"]').click();
    cy.get("#name").type(computer.name);
    cy.get('input[Value="Save this computer"]').click();
    notification().should(
      "contain",
      `Done! Computer ${computer.name} has been updated`
    );
  });

  it("Clicking on the cancle button while updating", () => {
    cy.get("#searchbox").type(computer.name);
    cy.get('input[type="submit"]').click();
    cy.get("table tbody td")
      .eq(0)
      .get("tr")
      .eq(1)
      .contains("a", computer.name)
      .click();
    cy.get("#name").clear();
    cy.get("#name").type(computer.name);
    cy.get('a[href*="/computers"]').click();

  });

  it("Entering wrong introduced date while updating", () => {
    cy.get("#searchbox").type(computer.name);
    cy.get('input[type="submit"]').click();
    cy.get("table tbody td")
      .eq(0)
      .get("tr")
      .eq(2)
      .contains("a", computer.name)
      .click();
    cy.get("#introduced").clear();
    cy.get("#introduced").type("20-07-2025");
    cy.get('input[Value="Save this computer"]').click();
    cy.get("#introduced").closest("div.clearfix").should("have.class", "error");
    cy.get("#introduced").clear();
    cy.get("#introduced").type("2029-07-19");
    cy.get('input[Value="Save this computer"]').click();

  });

  it("Entering wrong Discontinued date while updating", () => {
    cy.get("#searchbox").type(computer.name);
    cy.get('input[type="submit"]').click();
    cy.get("table tbody td")
      .eq(0)
      .get("tr")
      .eq(2)
      .contains("a", computer.name)
      .click();
    cy.get("#discontinued").clear();
    cy.get("#discontinued").type("20-07-2004");
    cy.get('input[Value="Save this computer"]').click();
    cy.get("#discontinued").closest("div.clearfix").should("have.class", "error");
    cy.get("#discontinued").clear();
    cy.get("#discontinued").type("2023-07-09");
    cy.get('input[Value="Save this computer"]').click();

  });

  it("Updating the name of company", () => {
    cy.get("#searchbox").type(computer.name);
    cy.get('input[type="submit"]').click();
    cy.get("table tbody td")
      .eq(0)
      .get("tr")
      .eq(1)
      .contains("a", computer.name)
      .click();
    cy.get("select").select(computer.companyName);
    cy.get('input[Value="Save this computer"]').click();
    notification().should(
      "contain",
      `Done! Computer ${computer.name} has been updated`
    );
  });

  it("Updates formData with valid data", () => {
    cy.get("#searchbox").type(computer.name);
    cy.get('input[type="submit"]').click();
    cy.get("table tbody td")
      .eq(0)
      .get("tr")
      .eq(2)
      .contains("a", computer.name)
      .click();
    cy.get("#name").clear();
    cy.get("#name").type(computer.name);
    cy.get("#introduced").clear();
    cy.get("#introduced").type("2029-03-19");
    cy.get("#discontinued").clear();
    cy.get("#discontinued").type("2023-07-09");
    cy.get("select").select(computer.companyName);
    cy.get('input[Value="Save this computer"]').click();
    notification().should(
      "contain",
      `Done! Computer ${computer.name} has been updated`
    );
  });
})