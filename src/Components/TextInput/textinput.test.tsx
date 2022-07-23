import React from "react";
import { render, screen } from "@testing-library/react";

import { TextInput } from "./index";

test("textinput contains text", () => {
  render(
    <TextInput
      type="text"
      label="Firstname"
      name="firstname"
      value=""
      placeholder="Firstname"
      id="firstname"
    />
  );
  const textinput = screen.getByRole("textbox");
  expect(textinput).toBeInTheDocument();
  expect(textinput).toHaveAttribute("name", "firstname");
});

