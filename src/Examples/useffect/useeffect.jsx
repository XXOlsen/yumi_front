import React, { useEffect, useState } from 'react';

const ExampleComponent = () => {
  const [count, setCount] = useState(0);

  // useEffect runs when the component mounts and whenever the count changes
  useEffect(() => {
    console.log(`Effect ran! Count is now ${count}`);
    
    // Cleanup function (optional)
    return () => {
      console.log('Cleanup!');
    };
  }, [count]); // Dependency array

  const increment = () => {
    setCount((prevCount) => prevCount + 1);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
};

export default ExampleComponent;
