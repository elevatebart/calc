import mount from "../../scripts/mount";
import CalcDisplay from "./Display.vue";

describe("<CalcDisplay />", () => {
  it("should look like a display", () => {
    mount(CalcDisplay, { slots: { default: "5" } });
  });
});
