/**
 * @jest-environment jsdom
 */
import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import SearchSection from "../components/SearchSection";

describe("SearchSection", () => {
  it("should render the search form", () => {
    render(<SearchSection />);
    const searchInput = screen.getByLabelText("Search");
    expect(searchInput).toBeInTheDocument();
  });

  it("should show error message when search input is invalid", async () => {
    render(<SearchSection />);
    const searchInput = screen.getByTestId("input-search");

    // Test with a valid input
    fireEvent.change(searchInput, { target: { value: "valid input" } });
    const searchButton = screen.getByTestId("submit-form");
    fireEvent.click(searchButton);
    expect(
      screen.queryByText("Search must be at least 2 characters")
    ).not.toBeInTheDocument();
  });
});
