import React, { useState } from 'react';

function Question4() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchData = () => {
    setLoading(true);

    // Simulating an asynchronous operation with a promise
    return new Promise((resolve, reject) => {
      // Simulate fetching data after 2 seconds
      setTimeout(() => {
        const randomNumber = Math.floor(Math.random() * 10);

        // Simulate success or failure based on the random number
        if (randomNumber % 2 == 0) {
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
    <div>
      <h2>Promise Example</h2>
      <button onClick={handleFetchData} disabled={loading}>
        {loading ? 'Fetching Data...' : 'Fetch Data'}
      </button>
      <br />
      {data && <p>{data}</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
}

export default Question4;
