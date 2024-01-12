import React from 'react';

class MyComponent extends React.Component {
  handleClick = () => {
    console.log('Button clicked in React!');
  };

  render() {
    return (
      <button onClick={this.handleClick}>Click me in React!</button>
    );
  }
}

export default MyComponent;
