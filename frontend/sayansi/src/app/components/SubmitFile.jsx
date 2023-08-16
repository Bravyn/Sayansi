import React, { useState } from 'react';
import './FileInputButton.css'; // Import the CSS file for styling

const FileInputButton = () => {
  const [ fileChosen, setFile ] = useState('')

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    // Handle the selected file as needed
    setFile(selectedFile)
  };

  return (
    <div className='main_container'>
    <div className="file-input-container">
      
      <input
        type="file"
        id="file-input"
        className="hidden-input"
        onChange={handleFileChange}
      />
      <label htmlFor="file-input" className="file-input-label">
        Choose a file
      </label>
    </div>
    </div>
  );
};

export default FileInputButton;
