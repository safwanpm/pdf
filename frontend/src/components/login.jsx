import React, { useState } from "react";
import axios from "axios";

const FileUpload = () => {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    try {
      const formData = new FormData();
      formData.append("pdfFile", file);
      
      await axios.get("http://localhost:4000/upload", formData);

      // Handle success (e.g., show a success message)
    } catch (error) {
      console.error("Error uploading file:", error);
      // Handle error (e.g., show an error message)
    }
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload</button>
    </div>
  );
};

export default FileUpload;
