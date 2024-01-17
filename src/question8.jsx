import React from 'react';

class EventBubblingExample extends React.Component {
  handleClick = (element) => {
    console.log(`Event bubbling phase: ${element}`);
  };

  render() {
    return (
      <div id="outer" onClick={() => this.handleClick('outer')}>
        <div id="middle" onClick={() => this.handleClick('middle')}>
          <button id="inner" onClick={() => this.handleClick('inner')}>
            Click me!
          </button>
        </div>
      </div>
    );
  }
}

const Question8 = () => {
  return (
    <div>
      <h2>Question 8: Event Bubbling</h2>
      <EventBubblingExample />
    </div>
  );
}

export default Question8;