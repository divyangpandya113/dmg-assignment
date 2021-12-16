import { config } from "../config";


export const visitAddNewComputer = () => {
  cy.visit(config.homepageUrl);
  cy.get("#add").click();
};
enum Selectors {
  notification = "#main > div.alert-message.warning",
  addComputerForm = "#main > form"
}
export const notification = () => cy.get(Selectors.notification);
export const addComputerForm = () => cy.get(Selectors.addComputerForm);
