import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Episode from "./../Episode";

const episodeData = {
  id: 1,
  image: null,
  name: "",
  season: 1,
  number: 1,
  summary: "test summary",
  runtime: 1,
};

test("renders without error", () => {});
render(<Episode episode={episodeData} />);

test("renders the summary test passed as prop", () => {});
render(<Episode episode={episodeData} />);

const summary = screen.queryAllByText(/test summary/i);
console.log(summary);

expect(summary).toBeTruthy();

test("renders default image when image is not defined", () => {});
render(<Episode episode={episodeData} />);

const image = screen.queryAllByAltText(
  "https://i.ibb.co/2FsfXqM/stranger-things.png"
);
console.log(image);

expect(image).toBeTruthy();
/** 
* [x] Complete a test that shows the Episode component renders. Pass in the provided example episode data as a test prop.
* [ ] Modify the test data to display a specific summary statement. Complete a test that shows that the summary value passed in to the Episode component displays as
 expected. **Use at least then 3 different types of expect statements to test the the existence of the summary value.**
* [ ] The episode component displays a default value ('https://i.ibb.co/2FsfXqM/stranger-things.png') when a image url is not provided. 
Create a new piece of test data with the image property set to `null`. Test that the alt tag of the image displayed is set to './stranger_things.png'.
*/
