import mount from "../scripts/mount";
import App from "./App.vue";

describe("<App />", () => {
  it("render the app", () => {
    mount(() => <App />);
  });

  it("Sets a number when typing 10", () => {
    mount(() => <App />);
    cy.get("[data-cy='1']").click()
    cy.get("[data-cy='0']").click()
    cy.get("[data-cy='display']").should('contain', '10')
  });

  it("Sets a number when typing it", () => {
    mount(() => <App />);
    cy.get("[data-cy='3']").click()
    cy.get("[data-cy='5']").click()
    cy.get("[data-cy='display']").should('contain', '35')
  });

  it("Adds two numbers when typing them with a + in the middle", () => {
    mount(() => <App />);
    cy.get("[data-cy='3']").click()
    cy.get("[data-cy='5']").click()
    cy.get("[data-cy='+']").click()
    cy.get("[data-cy='8']").click()
    cy.get("[data-cy='display']").should('not.contain', '35')
    cy.get("[data-cy='=']").click()
    cy.get("[data-cy='display']").should('contain', '43')
  });

  it("Substract two numbers when typing them with a + in the middle", () => {
    mount(() => <App />);
    cy.get("[data-cy='3']").click()
    cy.get("[data-cy='5']").click()
    cy.get("[data-cy='-']").click()
    cy.get("[data-cy='8']").click()
    cy.get("[data-cy='=']").click()
    cy.get("[data-cy='display']").should('contain', '27')
  });

  it("Substract two numbers when typing them with a + in the middle", () => {
    mount(() => <App />);
    cy.get("[data-cy='3']").click()
    cy.get("[data-cy='5']").click()
    cy.get("[data-cy='+']").click()
    cy.get("[data-cy='8']").click()
    cy.get("[data-cy='+']").click()
    cy.get("[data-cy='1']").click()
    cy.get("[data-cy='0']").click()
    cy.get("[data-cy='display']").should('contain', '10')
    cy.get("[data-cy='=']").click()
    cy.get("[data-cy='display']").should('contain', '53')
  });
});
