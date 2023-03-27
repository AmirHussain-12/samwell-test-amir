// Candidate.test.js
import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import Candidates from "../Candidates";
import { apiService } from "../../services";

// Mock the API service
jest.mock("../../services", () => {
  return {
    apiService: {
      getCandidates: jest.fn(),
    },
  };
});

describe("Candidates component", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  test("renders Candidates component and fetches data", async () => {
    const mockCandidates = [
      {
        id: 1,
        name: "John Doe",
      },
      {
        id: 2,
        name: "Jane Smith",
      },
    ];

    // Set up the mock implementation
    apiService.getCandidates.mockImplementation(() => {
      return Promise.resolve(mockCandidates);
    });

    render(<Candidates />);

    // Check if the table is rendered
    expect(screen.getByRole("table")).toBeInTheDocument();

    // Wait for the candidates data to be fetched and rendered
    await waitFor(() => {
      expect(apiService.getCandidates).toHaveBeenCalledTimes(1);
      mockCandidates.forEach((candidate) => {
        expect(screen.getByText(candidate.name)).toBeInTheDocument();
      });
    });
  });

  test("handles API error", async () => {
    // Set up the mock implementation to reject
    apiService.getCandidates.mockImplementation(() => {
      return Promise.reject(new Error("Failed to fetch candidates"));
    });

    // Suppress console.error during this test
    const originalError = console.error;
    console.error = jest.fn();

    render(<Candidates />);

    // Check if the table is rendered
    expect(screen.getByRole("table")).toBeInTheDocument();

    // Wait for the candidates data fetch attempt
    await waitFor(() => {
      expect(apiService.getCandidates).toHaveBeenCalledTimes(1);
    });

    // Restore the original console.error
    console.error = originalError;
  });
});