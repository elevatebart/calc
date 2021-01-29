import mount from "../scripts/mount";
import App from "./App.vue";

describe("<App />", () => {
  beforeEach(() => {
    mount(() => <App />);
  });

  function type(str: string){
    const characters = str.split('')
    characters.forEach(s => cy.get(`[data-cy='${s}']`).click())
  }

  function display(){
    return cy.get("[data-cy='display']")
  }

  it("Sets a number when typing 10", () => {
    type("10")
    display().should('contain', '10')
  });

  it("Sets a number when typing it", () => {
    type("35")
    display().should('contain', '35')
  });

  it("Adds two numbers when typing them with a + in the middle", () => {
    type("35+8=")
    display().should('contain', '43')
  });

  it("Substract two numbers when typing them with a - in the middle", () => {
    type("35-8=")
    display().should('contain', '27')
  });

  it("Chain additions", () => {
    type("35+8")
    display().should('contain', '8')
    type("+10")
    display().should('contain', '10')
    type("=")
    display().should('contain', '53')
  });

  it("Keep value for the next operation", () => {
    type("35+8")
    display().should('contain', '8')
    type("=")
    display().should('contain', '43')
    type("+10=")
    display().should('contain', '53')
  });

  it("Reset everything when clicking on AC", () => {
    type("35-8=")
    cy.get(`[data-cy='AC']`).click()
    display().should('contain', '0')
  });

  describe("negative", () => {
    it('displays a minus sign', () => {
      type("135")
      cy.get(`[data-cy='+/-']`).click()
      display().should('contain', '-135')
    })

    it('adds signed numbers', () => {
      type("135")
      cy.get(`[data-cy='+/-']`).click()
      type("+10=")
      display().should('contain', '-125')
    })

    it('adds signed numbers and chain on', () => {
      type("135")
      cy.get(`[data-cy='+/-']`).click()
      type("+10")
      display().should('contain', '10')
      type("+15")
      display().should('contain', '15')
      display().should("not.contain", "-")
      type("=")
      display().should('contain', '-110')
    })
  })
});
