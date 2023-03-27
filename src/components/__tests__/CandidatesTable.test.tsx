import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import CandidatesTable from "../CandidatesTable";

describe("CandidatesTable", () => {
  const data = [
    { id: 1, name: "Candidate 1" },
    { id: 2, name: "Candidate 2" },
    { id: 3, name: "Candidate 3" },
  ];

  const onClickMock = jest.fn();

  beforeEach(() => {
    onClickMock.mockClear();
  });

  it("should render table with data", () => {
    render(<CandidatesTable data={data} onClick={onClickMock} />);
    const rows = screen.getAllByRole("row");
    expect(rows).toHaveLength(data.length + 1); // header row + data rows
    expect(screen.getByText("No.")).toBeInTheDocument();
    expect(screen.getByText("Candidate Name")).toBeInTheDocument();
    data.forEach((row) => {
      expect(screen.getByText(row.name)).toBeInTheDocument();
    });
  });

  it("should call onClick when a row is clicked", () => {
    render(<CandidatesTable data={data} onClick={onClickMock} />);
    const rows = screen.getAllByRole("row");
    userEvent.click(rows[1]); // click first data row
    expect(onClickMock).toHaveBeenCalledWith(data[0]); // expect onClick to be called with the first row data
  });
});
