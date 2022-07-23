import React from "react";
import { render, screen } from "@testing-library/react";
import { Button } from "./index";

test("button contains text", () => {
  const handleClick = () => {
    console.log("clicked");
  };
  render(<Button text="Hello" onClick={handleClick} />);
  const button = screen.getByText("Hello");
  expect(button).toBeInTheDocument();
});

