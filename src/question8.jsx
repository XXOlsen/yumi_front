import React, { useState } from 'react';

const DynamicList = () => {
  const initialItems = [
    { id: 1, text: 'Item 1' },
    { id: 2, text: 'Item 2' },
    { id: 3, text: 'Item 3' },
    { id: 4, text: 'Item 4' },
  ];

  const [items, setItems] = useState(initialItems);
  const [newItemText, setNewItemText] = useState('');
  const [newItemId, setNewItemId] = useState('');

  const addItem = () => {
    if (newItemText && newItemId) {
      const newItem = { id: Number(newItemId), text: newItemText };
      setItems([...items, newItem]);
      setNewItemText('');
      setNewItemId('');
    }
  };

  const deleteItem = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  const repositionItem = (id, newPosition) => {
    const updatedItems = items.filter((item) => item.id !== id);
    const index = newPosition - 1; // Adjust to 0-based index
    updatedItems.splice(index, 0, items.find((item) => item.id === id));
    setItems(updatedItems);
  };

  return (
    <div>
      <h2>Dynamic List with Order Control</h2>

      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.text}{' '}
            <button onClick={() => deleteItem(item.id)}>Delete</button>
          </li>
        ))}
      </ul>

      <div>
        <label>
          New Item Text:
          <input
            type="text"
            value={newItemText}
            onChange={(e) => setNewItemText(e.target.value)}
          />
        </label>
        <label>
          New Item ID:
          <input
            type="number"
            value={newItemId}
            onChange={(e) => setNewItemId(e.target.value)}
          />
        </label>
        <button onClick={addItem}>Add Item</button>
      </div>

      <button onClick={() => repositionItem(Number(newItemId), 5)}>
        Move Item to 5th Place
      </button>
    </div>
  );
};

class Question8 extends React.Component {
  handleClick = (element, phase) => {
    console.log(`${phase} on ${element} element`);
  };

  handleCaptureOuter = () => {
    // Capture the click on the outer button
    console.log('Captured Outer during capture');

    // Log the bubbling phase for the inner element
    this.handleClick('inner', 'Bubbling');

    // Log the bubbling phase for the middle element
    this.handleClick('middle', 'Bubbling');
  };

  handleBubblingButton = () => {
    // Log the bubbling phase for the inner element
    this.handleClick('inner', 'Bubbling');

    // Log the bubbling phase for the middle element
    this.handleClick('middle', 'Bubbling');

    // Log the bubbling phase for the outer element
    this.handleClick('outer', 'Bubbling');
  };

  render() {
    return (
      <div>
        <h1>Question 8</h1>
        <div id="outer">
          <div id="middle">
            <div id="inner">
              {/* Button capturing the outer element and bubbling through the inner and middle */}
              <button onClick={this.handleCaptureOuter}>
                Capture Outer and Bubble
              </button>

              {/* Button only bubbling through the outer, middle, and inner elements */}
              <button onClick={this.handleBubblingButton}>
                Bubbling Button
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export { Question8, DynamicList };
