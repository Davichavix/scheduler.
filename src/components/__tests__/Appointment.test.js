import React from "react";

import { render } from "@testing-library/react";

import Appointment from "components/Application";

describe("Appointment", () => {
  it("renders without crashing", () => {
    render(<Appointment />);
  });

  it("does something it is supposed to do", () => {
    // ...
  });

  test("does something else it is supposed to do", () => {
    // ...
  });
});