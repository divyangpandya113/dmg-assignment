import { config } from "../config";
import { notification } from "./app.utils";

context("View and updating testing", () => {
  const name = "RamdonName"
  it("Viewing data and updating name of computer", () => {
    cy.visit(config.homepageUrl);
    cy.get("#searchbox").type(name);
    cy.get('input[type="submit"]').click();
    cy.get("table tbody td")
      .eq(0)
      .get("tr")
      .eq(1)
      .contains("a", name)
      .click();
    cy.get("#name").clear();
    cy.get('input[value="Save this computer"]').click();
    cy.get("#name").type(name);
    cy.get('input[Value="Save this computer"]').click();
    notification().should(
      "contain",
      `Done! Computer ${name} has been updated`
    );
  });

  it("Clicking on the cancle button while updating", () => {
    cy.get("#searchbox").type(name);
    cy.get('input[type="submit"]').click();
    cy.get("table tbody td")
      .eq(0)
      .get("tr")
      .eq(1)
      .contains("a", name)
      .click();
    cy.get("#name").clear();
    cy.get("#name").type(name);
    cy.get('a[href*="/computers"]').click();

  });

  it("Entering wrong introduced date while updating", () => {
    cy.get("#searchbox").type(name);
    cy.get('input[type="submit"]').click();
    cy.get("table tbody td")
      .eq(0)
      .get("tr")
      .eq(2)
      .contains("a", name)
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
    cy.get("#searchbox").type(name);
    cy.get('input[type="submit"]').click();
    cy.get("table tbody td")
      .eq(0)
      .get("tr")
      .eq(3)
      .contains("a", name)
      .click();
    cy.get("#discontinued").clear();
    cy.get("#discontinued").type("20-07-2023");
    cy.get('input[Value="Save this computer"]').click();
    cy.get("#discontinued").closest("div.clearfix").should("have.class", "error");
    cy.get("#discontinued").clear();
    cy.get("#discontinued").type("2023-07-09");
    cy.get('input[Value="Save this computer"]').click();

  });

  it("Updating the name of company", () => {
    cy.get("#searchbox").type(name);
    cy.get('input[type="submit"]').click();
    cy.get("table tbody td")
      .eq(0)
      .get("tr")
      .eq(1)
      .contains("a", name)
      .click();
    cy.get("select").select("RCA");
    cy.get('input[Value="Save this computer"]').click();
    notification().should(
      "contain",
      `Done! Computer ${name} has been updated`
    );
  });
})