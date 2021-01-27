import mount from "../../scripts/mount";
import CalcButton from "./Button.vue";

describe("<CalcButton />", () => {
  it("should look like a button", () => {
    mount(CalcButton, { slots: { default: "5" } });
  });
});
