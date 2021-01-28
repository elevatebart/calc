import mount from "../scripts/mount";
import App from "./App.vue";

describe("<App />", () => {
  it("render the app", () => {
    mount(() => <App />);
  });
});
