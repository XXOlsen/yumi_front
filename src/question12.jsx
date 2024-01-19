import React, { useState } from 'react';

function Question12() {
  // Question5 state
  const [showContent, setShowContent] = useState(false);

  // Question12 state
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  // Question5 function
  const toggleContent = () => {
    setShowContent(!showContent);
  };

  // Question12 function
  const fetchData = () => {
    setLoading(true);

    // Simulating an asynchronous operation with a promise
    return new Promise((resolve, reject) => {
      // Simulate fetching data after 2 seconds
      setTimeout(() => {
        const randomNumber = Math.floor(Math.random() * 10);

        // Simulate success or failure based on the random number
        if (randomNumber % 2 === 0) {
          resolve(`Data successfully fetched: ${randomNumber}`);
        } else {
          reject('Error fetching data. Please try again.');
        }

        setLoading(false);
      }, 2000);
    });
  };

  const handleFetchData = () => {
    // Call the fetchData function when the button is clicked
    fetchData()
      .then((result) => {
        // Set the data in state on successful promise resolution
        setData(result);
      })
      .catch((error) => {
        // Set the error in state on promise rejection
        setError(error);
      });
  };

  return (
    <div className="container">
      <h2>Question 12</h2>

      {/* Question5 content */}
      <button onClick={toggleContent}>Toggle Content</button>
      {showContent ? (
        <div className="content-container">
          <p>This content is displayed when showContent is true.</p>
          {/* Add more content as needed */}
        </div>
      ) : (
        <p>Click the button to show the content.</p>
      )}

      {/* Question12 content */}
      <button onClick={handleFetchData} disabled={loading}>
        {loading ? 'Fetching Data...' : 'Fetch Data'}
      </button>
      <br />
      {data && <p>{data}</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
}

export default Question12;
