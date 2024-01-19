import React, { useState } from 'react';

const Question11 = () => {
  const [result, setResult] = useState('');

  // Synchronous function
  const syncFunction = () => {
    const value = 'Synchronous Function Result';
    setResult(value);
  };

  // Asynchronous function using async/await
  const asyncFunction = async () => {
    try {
      // Simulate fetching data from an API
      const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
      const data = await response.json();

      setResult(`Async Function Result: ${data.title}`);
    } catch (error) {
      setResult('Error occurred while fetching data');
    }
  };

  return (
    <div>
      <h2>Question 11</h2>

      <button onClick={syncFunction}>Run Synchronous Function</button>
      <button onClick={asyncFunction}>Run Asynchronous Function</button>

      <p>Result: {result}</p>
    </div>
  );
};

export default Question11;
