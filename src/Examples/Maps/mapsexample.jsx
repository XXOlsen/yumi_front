import React from 'react';

const ListComponent = () => {
  const items = ['Item 1', 'Item 2', 'Item 3'];

  const renderedItems = items.map((item, index) => {
    return <li key={index}>{item}</li>;
  });

  return (
    <ul>
      {renderedItems}
    </ul>
  );
};

const App = () => {
  return (
    <div>
      <h2>List Example</h2>
      <ListComponent />
    </div>
  );
};

export default App;
