"use client"
import React, { useState } from 'react';

function InputWithPreview() {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div>
      <input 
        type="text" 
        id="myInput" 
        name="myInput" 
        placeholder="Enter text here" 
        className="border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:border-blue-500"
        value={inputValue}
        onChange={handleInputChange}
      />
      <div className="mt-2">
        Preview: <span>{inputValue}</span>
      </div>
    </div>
  );
}

export default InputWithPreview;
