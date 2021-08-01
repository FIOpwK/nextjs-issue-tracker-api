// import core dependencies
import React from "react";
import renderer from "react-test-renderer";
import Home from "../pages/home";

describe("Rendering content for the /home route", () => {
  beforeAll(() => {
    console.log("running...");
  });

  afterAll(() => [console.log("stopping...")]);

  test("page renders navigation links and  create new issue button", () => {
    const homePageComponent = renderer.create(<Home />).toJSON();
    expect(homePageComponent).toMatchSnapshot();
  });
});
