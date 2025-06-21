import React from "react";

function FileUpload({ onUpload }) {
  const handleChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const reader = new FileReader();

      reader.onload = (event) => {
        // Encode file as Base64 string
        const base64String = event.target.result;
        onUpload({
          name: file.name,
          type: file.type,
          base64: base64String,
        });
      };

      reader.onerror = (error) => {
        console.error("Error reading file:", error);
      };

      reader.readAsDataURL(file); // This reads the file content as a Base64 string
    }
  };

  return (
    <div className="mt-4 p-4 text-gray-300">
      <label className="block mb-2 font-medium">Upload File (PDF/TXT):</label>
      <input
        type="file"
        accept=".pdf,.txt"
        onChange={handleChange}
        className="border p-2 rounded-4xl"
      />
    </div>
  );
}

export default FileUpload;
