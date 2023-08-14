import React, { useState } from 'react';
import './SubmitBox.css'; // Import your CSS file for styling

const TextInput = () => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // You can add your submission logic here
    console.log('Submitted:', inputValue);
    setInputValue(''); // Clear the input after submission
  };

  return (
    <div className="submit-box">
      <form onSubmit={handleSubmit}>
        <textarea
          className="submit-input"
          placeholder="Enter your submission..."
          value={inputValue}
          onChange={handleInputChange}
        />
        <button className="submit-button" type="submit">Submit</button>
      </form>
    </div>
  );
};

export default TextInput;
