import mount from "../scripts/mount";
import App from "./App.vue";

describe("<App />", () => {
  it("render the app", () => {
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
    mount(() => <App />);
    type("10")
    display().should('contain', '10')
  });

  it("Sets a number when typing it", () => {
    mount(() => <App />);
    type("35")
    display().should('contain', '35')
  });

  it("Adds two numbers when typing them with a + in the middle", () => {
    mount(() => <App />);
    type("35+8=")
    display().should('contain', '43')
  });

  it("Substract two numbers when typing them with a - in the middle", () => {
    mount(() => <App />);
    type("35-8=")
    display().should('contain', '27')
  });

  it("Chain additions", () => {
    mount(() => <App />);
    type("35+8")
    display().should('contain', '8')
    type("+10")
    display().should('contain', '10')
    type("=")
    display().should('contain', '53')
  });

  it("Keep value for the next operation", () => {
    mount(() => <App />);
    type("35+8")
    display().should('contain', '8')
    type("=")
    display().should('contain', '43')
    type("+10=")
    display().should('contain', '53')
  });
});
