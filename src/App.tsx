import { Card } from "./lib/Card";
import { Navbar } from "./lib/Navbar";
import { useState } from "react";
import feedbackData from "./data";

export const App = () => {
  const [feedback, setFeedback] = useState(feedbackData);

  return (
    <>
      <Navbar />
      <Card fb={feedback} />
    </>
  );
};