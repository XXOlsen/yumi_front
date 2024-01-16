import React, { useState, useEffect } from 'react';

function Question1() {
  const [multiplier, setMultiplier] = useState(2);
  const [resultMultiply, setResultMultiply] = useState(null);

  useEffect(() => {
    // Higher-Order Function (HOF)
    const multiplyBy = (multiplier) => {
      // The returned function is the closure
      return (number) => {
        return number * multiplier;
      };
    };

    // Using the Higher-Order Function to create a new function
    const multiplyByMultiplier = multiplyBy(multiplier);

    // Using the returned function and updating state
    setResultMultiply(multiplyByMultiplier(5));
  }, [multiplier]); // Re-run the effect whenever the multiplier changes

  const handleMultiplierChange = (event) => {
    setMultiplier(Number(event.target.value));
  };

  return (
    <div>
      <h2>Question 1</h2>
      <label>
        Multiplier:
        <input
          type="number"
          value={multiplier}
          onChange={handleMultiplierChange}
        />
      </label>
      <p>Result of multiplyByMultiplier(5): {resultMultiply}</p>
    </div>
  );
}

export default Question1;
