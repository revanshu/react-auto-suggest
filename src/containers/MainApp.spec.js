import React from "react";
import ReactDOM from "react-dom";
import { shallow } from "enzyme";
import MainApp from "./MainApp";
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<MainApp />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it("when any movie is selected it should be added in selected data", () => {
  const wrapper = shallow(<MainApp />);
  const instance = wrapper.instance();
  let obj = {
    Title: "name"
  };
  let arr = ["name"];
  instance.handleSelection(obj);
  expect(wrapper.state().selectedData).toEqual(arr);
});
