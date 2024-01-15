import React from 'react';

const SimpleList = () => {
  const fruits = ['Apple', 'Banana', 'Orange', 'Grapes'];

  return (
    <div>
      <h2>Fruits:</h2>
      <ul>
        {fruits.map((fruit, index) => (
          <li key={index}>{fruit}</li>
        ))}
      </ul>
    </div>
  );
};

export default SimpleList;