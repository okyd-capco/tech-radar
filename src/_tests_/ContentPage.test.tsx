import * as React from "react";
import { render } from "@testing-library/react";
import { RadarContextProvider } from "../components/RadarContextProvider";
import ContentPage from "../pages/ContentPage";
import { BrowserRouter as Router } from "react-router-dom";

window.scroll = jest.fn();

describe("ContentPage", () => {
  it("should render ContentPage component", () => {
    const { container } = render(
      <Router>
        <RadarContextProvider>
          <ContentPage />
        </RadarContextProvider>
      </Router>
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
