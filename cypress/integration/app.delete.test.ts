import { config } from "../config";
import { visitAddNewComputer } from './app.utils';
import { sample } from 'lodash';
import { Computer } from '../types';

describe("Delete tests", () => {
  let computer: Computer;
  beforeEach(() => {
    cy.fixture("computers").then((data: Computer[]) => {
      computer = sample(data)
      computer.name += " Fotariya"
      //Adding a sample data to deleted
      visitAddNewComputer();
      cy.get("#name").type(computer.name);
      cy.get("#introduced").type(computer.introducedDate);
      cy.get('form').submit();
    });

  });
  it("Deleting the computer", () => {
    cy.visit(config.homepageUrl);
    cy.get("#searchbox").type(computer.name);
    cy.get('input[type="submit"]').click();
    cy.get("table tbody td")
      .eq(0)
      .get("tr")
      .eq(1)
      .contains("a", computer.name)
      .click();
    cy.get('input[Value="Delete this computer"]').click();
  });
})
