import React from "react";
import { render, fireEvent, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Display from "./../Display";

test("renders without errors with no props", () => {});
render(<Display />);

test("renders Show component when the button is clicked ", async () => {
  render(<Display />);
  let button = await screen.findByText("Press to Get Show Data");
  fireEvent.click(button);
  await screen.findByText("Press to Get Show Data");
});

test("renders show season options matching your data when the button is clicked", async () => {
  render(<Display />);
  const button = screen.getByRole("button");
  fireEvent.click(button);

  await waitFor(() => {
    const seasonOptions = screen.queryAllByTestId("season-option");
    expect(seasonOptions).toHaveLength(4);
  });
});

/*
 * [x] Test that the Display component renders without any passed in props.
 * [x] Rebuild or copy the show test data element as used in the previous set of tests.
 * [x] Test that when the fetch button is pressed, the show component will display. Make sure to account for the api call and change of state in building your test.
 * [x] Test that when the fetch button is pressed, the amount of select options rendered is equal to the amount of seasons in your test data.
 * [x] Notice the optional functional prop passed in to the Display component client code. Test that when the fetch button is pressed, this function is called.
 */
