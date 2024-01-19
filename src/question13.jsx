import React, { useState, useEffect } from 'react';

function Question13() {
  // Question1 state
  const [multiplier, setMultiplier] = useState(2);
  const [resultMultiply, setResultMultiply] = useState(null);

  // Question1 effect
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

  // Question3 state
  const [count, setCount] = useState(0);

  // Question3 function
  const increment = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h2>Combined Component</h2>

      {/* Question1 content */}
      <label>
        Multiplier:
        <input
          type="number"
          value={multiplier}
          onChange={handleMultiplierChange}
        />
      </label>
      <p>Result of multiplyByMultiplier(5): {resultMultiply}</p>

      <hr />

      {/* Question3 content */}
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
}

export default Question13;
