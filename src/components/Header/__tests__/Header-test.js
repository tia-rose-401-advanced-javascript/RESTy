import React from "react";
import Header from "../Header";
import "../../../setupTest";

describe("<Header /> component", () => {
  it("renders as expected", () => {
    const app = global.shallow(<Header />);

    expect(app.find("header").exists()).toBeTruthy();
  });
});
