import mount from "../../scripts/mount";
import CalcButton from "./Button.vue";

describe("<CalcButton />", () => {
  it("should look like a button", () => {
    mount(CalcButton, { slots: { default: "5" } });
  });

  it("should be orange when operator variant", () => {
    mount(CalcButton, {
      slots: { default: "+" },
      props: { variant: "operator" },
    });
  });

  it("should be darkened when dark variant", () => {
    mount(CalcButton, {
      slots: { default: "AC" },
      props: { variant: "dark" },
    });
  });

  it("should be wider when wide variant", () => {
    mount(CalcButton, {
      slots: { default: "0" },
      props: { variant: "wide" },
    });
  });

  it("should emit a click when clicking on the button", () => {
    const stub = cy.stub().as("onClick");
    // @ts-ignore JSX is being mean for a reason I ignore
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
