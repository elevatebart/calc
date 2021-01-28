import mount from "../../scripts/mount";
import CalcContainer from "./Container.vue";

describe("<CalcContainer />", () => {
  it("should look like a mac container", () => {
    mount(() => <CalcContainer>8000</CalcContainer>);
  });
});
