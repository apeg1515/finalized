import React from "react";
import ReactDOM from "react-dom";
import * as enzyme from "enzyme";
import Dashboard from "./components/Dashboard";
import App from "./components/App";
import * as Adapter from "enzyme-adapter-react-16";
enzyme.configure({ adapter: new Adapter() });

describe("something", () => {
  it("should do stuff", () => {
    expect(1).toEqual(1);
  });
});

describe("Main Component Mounted", () => {
  ReactDOM.render(<App />, document.createElement("div"));
});
describe("Dashboard", () => {
  it("renders the view", () => {
    const list = enzyme.shallow(<Dashboard />);
    expect(list.find("li").length).toEqual(1);
  });
});
