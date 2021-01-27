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
});
