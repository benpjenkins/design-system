import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render, fireEvent } from "@testing-library/react";

import { Button } from "./index";

describe("button", () => {
  test("button", () => {
    let clickedCount = 0;
    const incrementClickedCount = () => (clickedCount += 1);
    const { getByText } = render(
      <Button onClick={incrementClickedCount} data-test-id="zissou-button">
        Test
      </Button>
    );
    const button = getByText("Test");
    fireEvent.click(button, "rightClick");
    expect(clickedCount).toBe(1);
  });
});
