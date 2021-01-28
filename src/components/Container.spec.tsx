import mount from "../../scripts/mount";
import CalcContainer from "./Container.vue";

describe("<CalcContainer />", () => {
  it("should look like a mac container", () => {
    mount(() => (
      <CalcContainer>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur cum
        laborum labore id possimus? Voluptates delectus iure enim nobis maxime
        illo blanditiis, repellat sunt voluptatibus dignissimos! Assumenda animi
        non quia.
      </CalcContainer>
    ));
  });
});
