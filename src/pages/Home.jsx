import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import RoleSelector from "../components/RoleSelector";

const MEETING_ACTIVE_KEY = "isMeetingActive";
const MESSAGES_STORAGE_KEY = "interviewMessages"; // Re-using from InterviewRoom

function Home() {
  const navigate = useNavigate();
  // State to control visibility of role selector
  const [showRoleSelector, setShowRoleSelector] = useState(
    localStorage.getItem(MEETING_ACTIVE_KEY) === "true" // Check if meeting was already active
  );

  // Function to handle starting a new meeting
  const handleStartMeeting = () => {
    localStorage.removeItem(MESSAGES_STORAGE_KEY); // Clear old chat messages
    localStorage.setItem(MEETING_ACTIVE_KEY, "true"); // Set meeting as active
    setShowRoleSelector(true); // Show role selection
  };

  const handleSelectRole = (selectedRole) => {
    localStorage.setItem("userRole", selectedRole);
    navigate("/room"); // Navigate to interview room
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-900 text-gray-300">
      <h1 className="text-5xl font-bold mb-8">Interview Hub</h1>

      {!showRoleSelector ? (
        <button
          onClick={handleStartMeeting}
          className="px-8 py-4 bg-purple-600 text-white text-xl font-semibold rounded-xl hover:bg-purple-700 transition-colors duration-200 shadow-lg"
        >
          Start New Meeting
        </button>
      ) : (
        <>
          <h2 className="text-3xl font-bold mb-6">Choose Your Role</h2>
          <RoleSelector onSelect={handleSelectRole} />
        </>
      )}
    </div>
  );
}

export default Home;
