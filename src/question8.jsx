import React, { useEffect } from 'react';

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

export default Question8;
