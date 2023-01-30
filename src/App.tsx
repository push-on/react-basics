import { Card } from "./lib/Card";
import { Navbar } from "./lib/Navbar";
import { useState } from "react";

export const App = () => {
  const [feedback, setFeedback] = useState("");
  return (
    <>
      <Navbar />
      <Card />
    </>
  );
};