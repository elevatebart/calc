import mount from "../../scripts/mount";
import CalcButton from "./Button.vue";

describe("<CalcButton />", () => {
  it("should look like a button", () => {
    mount(() => <CalcButton>5</CalcButton>);
  });

  it("should be orange when operator variant", () => {
    mount(() => <CalcButton variant="operaror">+</CalcButton>);
  });

  it("should be darkened when dark variant", () => {
    mount(() => <CalcButton variant="dark">AC</CalcButton>);
  });

  it("should be wider when wide variant", () => {
    mount(() => <CalcButton variant="wide">0</CalcButton>);
  });

  it("should emit a click when clicking on the button", () => {
    const stub = cy.stub().as("onClick");
    // @ts-ignore JSX is being mean when using vetur
    mount(() => <CalcButton onClick={stub}>8</CalcButton>).then(() =>
      cy
        .get("button")
        .click()
        .then(() => {
          expect(stub).to.have.been.called;
        })
    );
  });
});
