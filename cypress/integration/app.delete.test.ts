import { config } from "../config";

context("Delete tests", () => {
  const name = "RamdonName"
  it("Deleting the computer", () => {
    cy.visit(config.homepageUrl);
    cy.get("#searchbox").type(name);
    cy.get('input[type="submit"]').click();
    cy.get("table tbody td")
      .eq(0)
      .get("tr")
      .eq(1)
      .contains("a", name)
      .click();
    cy.get('input[Value="Delete this computer"]').click();
  });
})
