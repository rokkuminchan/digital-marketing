import React from "react";
import renderer from "react-test-renderer";
import Title from "../components/common/Title";

describe("Title", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<Title data="Default Starter" />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
