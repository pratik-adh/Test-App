import React from "react";
import enzyme, { shallow } from "enzyme";
import App from "./App";
import Adapter from "enzyme-adapter-react-16";

enzyme.configure({ adapter: new Adapter() });
describe("Counter-Application", () => {
  test("when the increment button is clicked", () => {
    const wrapper = shallow(<App />);

    const incrementButton = wrapper.find('[data-testid="incremented-value"]');
    incrementButton.simulate("click");

    const value = wrapper.find('[data-testid="counter-value"]');

    expect(value.text()).toBe("1");
  });
});
