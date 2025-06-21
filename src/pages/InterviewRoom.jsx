import React, { useEffect, useState, useCallback } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import ChatWindow from "../components/ChatWindow";
import MessageInput from "../components/MessageInput";
import FileUpload from "../components/FileUpload";

const MESSAGES_STORAGE_KEY = "interviewMessages";
const MEETING_ACTIVE_KEY = "isMeetingActive"; // Define the key for meeting status

function InterviewRoom() {
  const [messages, setMessages] = useState([]);
  const role = localStorage.getItem("userRole") || "Candidate";
  const navigate = useNavigate(); // Initialize useNavigate hook

  const loadMessages = useCallback(() => {
    try {
      const storedMessages = localStorage.getItem(MESSAGES_STORAGE_KEY);
      return storedMessages ? JSON.parse(storedMessages) : [];
    } catch (error) {
      console.error("Error parsing messages from localStorage:", error);
      return [];
    }
  }, []);

  const saveMessages = useCallback((newMessages) => {
    localStorage.setItem(MESSAGES_STORAGE_KEY, JSON.stringify(newMessages));
  }, []);

  useEffect(() => {
    // Ensure a meeting is active when entering this room, otherwise redirect
    if (localStorage.getItem(MEETING_ACTIVE_KEY) !== "true") {
      navigate("/");
      return;
    }
    setMessages(loadMessages());
  }, [loadMessages, navigate]);

  const sendMessage = (text) => {
    const newMessages = [
      ...messages,
      { sender: role, type: "text", text, timestamp: Date.now() },
    ];
    setMessages(newMessages);
    saveMessages(newMessages);
  };

  const handleFileUpload = (fileData) => {
    const newMessages = [
      ...messages,
      { sender: role, type: "file", file: fileData, timestamp: Date.now() },
    ];
    setMessages(newMessages);
    saveMessages(newMessages);
  };

  // Handler for ending the meeting
  const handleEndMeeting = () => {
    if (
      window.confirm(
        "Are you sure you want to end the meeting? This will clear the chat history."
      )
    ) {
      localStorage.removeItem(MESSAGES_STORAGE_KEY); // Clear chat messages
      localStorage.removeItem(MEETING_ACTIVE_KEY); // Mark meeting as inactive
      localStorage.removeItem("userRole"); // Optionally clear role as well
      navigate("/"); // Redirect to home page
    }
  };

  useEffect(() => {
    const handleStorageChange = (event) => {
      if (
        event.key === MESSAGES_STORAGE_KEY ||
        event.key === MEETING_ACTIVE_KEY
      ) {
        if (event.key === MEETING_ACTIVE_KEY && event.newValue === null) {
          // If meeting ended in another tab, redirect
          navigate("/");
        } else {
          setMessages(loadMessages());
        }
      }
    };

    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, [loadMessages, navigate]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 p-6 w-full">
      <h2 className="text-4xl font-bold mb-4 text-gray-300">
        Interview Room ({role})
      </h2>
      <div className="w-full max-w-3xl p-5">
        <ChatWindow messages={messages} currentUserRole={role} />
        <MessageInput onSend={sendMessage} />
        {role === "Interviewer" && <FileUpload onUpload={handleFileUpload} />}

        <button
          onClick={handleEndMeeting}
          className="mt-6 px-6 py-3 bg-red-600 text-white rounded-4xl hover:bg-red-700 transition-colors duration-200 shadow-lg w-full"
        >
          End Meeting
        </button>
      </div>
    </div>
  );
}

export default InterviewRoom;
