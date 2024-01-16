import React, { useState } from 'react';

function Question9() {
  // Use state variables if needed
  const [answer, setAnswer] = useState('');

  // Handle changes to the input field
  const handleInputChange = (event) => {
    setAnswer(event.target.value);
  };

  // Handle submission of the answer
  const handleSubmit = (event) => {
    event.preventDefault();
    // Add logic to handle the submitted answer, e.g., send to the server
    console.log('Submitted answer:', answer);
  };

  return (
    <div>
      <h2>Question 9</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Your Answer:
          <input
            type="text"
            value={answer}
            onChange={handleInputChange}
            required
          />
        </label>
        <button type="submit">Submit Answer</button>
      </form>
    </div>
  );
}

export default Question9;
