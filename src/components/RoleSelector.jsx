import React from "react";

function RoleSelector({ onSelect }) {
  return (
    <div className="flex gap-4">
      <button
        className="px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700"
        onClick={() => onSelect("Interviewer")}
      >
        Interviewer
      </button>
      <button
        className="px-6 py-3 bg-green-600 text-white rounded-xl hover:bg-green-700"
        onClick={() => onSelect("Candidate")}
      >
        Candidate
      </button>
    </div>
  );
}

export default RoleSelector;
