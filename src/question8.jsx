import React from 'react';

class Question8 extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [
        { id: 1, text: 'Item 1' },
        { id: 2, text: 'Item 2' },
        { id: 3, text: 'Item 3' },
        { id: 4, text: 'Item 4' },
      ],
      newItemText: '',
      newItemId: '',
    };
  }

  addItem = () => {
    const { newItemText, newItemId, items } = this.state;

    if (newItemText && newItemId) {
      const newItem = { id: Number(newItemId), text: newItemText };
      this.setState({
        items: [...items, newItem],
        newItemText: '',
        newItemId: '',
      });
    }
  };

  deleteItem = (id) => {
    this.setState((prevState) => ({
      items: prevState.items.filter((item) => item.id !== id),
    }));
  };

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
    const { items, newItemText, newItemId } = this.state;

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

        <h2>Dynamic List with Order Control</h2>

        <ul>
          {items.map((item) => (
            <li key={item.id}>
              {item.text}{' '}
              <button onClick={() => this.deleteItem(item.id)}>Delete</button>
            </li>
          ))}
        </ul>

        <div>
          <label>
            New Item Text:
            <input
              type="text"
              value={newItemText}
              onChange={(e) =>
                this.setState({ newItemText: e.target.value })
              }
            />
          </label>
          <label>
            New Item ID:
            <input
              type="number"
              value={newItemId}
              onChange={(e) =>
                this.setState({ newItemId: e.target.value })
              }
            />
          </label>
          <button onClick={this.addItem}>Add Item</button>
        </div>
      </div>
    );
  }
}

export default Question8;
