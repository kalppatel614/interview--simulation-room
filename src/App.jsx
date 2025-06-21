import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import InterviewRoom from "./pages/InterviewRoom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/room" element={<InterviewRoom />} />
    </Routes>
  );
}
export default App;
