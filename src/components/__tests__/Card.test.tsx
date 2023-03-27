import React from "react";
import { render, screen } from "@testing-library/react";
import Card from ".././Card";

describe("Card", () => {
  const video = {
    src: "https://example.com/video.mp4",
    questionId: 1,
    comments: ["Test comment"],
  };
  const applicationId = 1;
  const id = 1;

  it("renders the video with the correct source", () => {
    render(<Card video={video} applicationId={applicationId} id={id} />);
    const videoElement = screen.getByTestId(id)
    expect(videoElement).toBeInTheDocument();
    const sourceElement = videoElement.querySelector('source');
    const src = sourceElement?.getAttribute('src');
    expect(src).toEqual(video.src);
    expect(videoElement).toBeInTheDocument();
  });

  it("renders the Question component with the correct question ID", () => {
    render(<Card video={video} applicationId={applicationId} id={id} />);
    expect(screen.getByText("Question")).toBeInTheDocument();
  });

  it("renders the Comment component with the correct comments and question ID", () => {
    render(<Card video={video} applicationId={applicationId} id={id} />);
    expect(screen.getByText("Comments")).toBeInTheDocument();
    expect(screen.getByText(video.comments[0])).toBeInTheDocument();

  });
});
