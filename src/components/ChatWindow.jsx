import React, { useEffect, useRef } from "react";

function ChatWindow({ messages, currentUserRole }) {
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleDownload = (file) => {
    const link = document.createElement("a");
    link.href = file.base64;
    link.download = file.name;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="h-[50vh] overflow-y-auto bg-gray-800 p-4 rounded mb-4 shadow flex flex-col custom-scrollbar">
      {" "}
      {/* Added custom-scrollbar class */}
      {messages.length === 0 && (
        <p className="text-gray-400 text-center flex-grow flex items-center justify-center">
          No messages yet. Start the conversation!
        </p>
      )}
      {messages.map((msg, idx) => (
        <div
          key={idx}
          className={`mb-2 p-2 rounded max-w-[80%] ${
            msg.sender === currentUserRole
              ? "bg-blue-100 self-end text-right"
              : "bg-green-100 self-start text-left"
          }`}
        >
          {msg.type === "text" && (
            <p className="text-sm">
              <strong>{msg.sender}:</strong> {msg.text}
            </p>
          )}
          {msg.type === "file" && msg.file && (
            <div className="text-sm">
              <strong>{msg.sender} sent a file:</strong>
              <p className="mt-1">
                <span className="font-semibold">{msg.file.name}</span> (.
                {msg.file.type.split("/")[1] || "file"})
              </p>
              <button
                onClick={() => handleDownload(msg.file)}
                className="mt-2 px-3 py-1 bg-blue-500 text-white rounded text-xs hover:bg-blue-600"
              >
                Download File
              </button>
            </div>
          )}
        </div>
      ))}
      <div ref={messagesEndRef} />
    </div>
  );
}

export default ChatWindow;
