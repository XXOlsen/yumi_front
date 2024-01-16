import React, { useState } from 'react';

// InformationBox component to display key differences
const InformationBox = () => {
  return (
    <div style={{ marginLeft: '20px', padding: '10px', border: '1px solid #ccc' }}>
      <h3>Key Differences:</h3>
      <ul>
        <li>
          {/* JavaScript Integration */}
          JSX: Allows embedding JavaScript expressions directly within curly braces {'{}'}.
          <br />
          HTML: Does not support embedded JavaScript expressions.
          <br />
          <br />
          {/* Code Examples */}
          <b>JSX:</b>
          <pre>
            {`const name = "John";
const element = <p>Hello, {name}!</p>;`}
          </pre>
          <b>HTML:</b>
          <pre>
            {`<!-- HTML does not support embedded JavaScript -->
<p>Hello, John!</p>`}
          </pre>
        </li>
        <li>
          {/* Attribute Names */}
          JSX: Attribute names use camelCase conventions, such as className and tabIndex.
          <br />
          HTML: Attribute names typically use kebab-case, such as class and tabindex.
          <br />
          <br />
          {/* Code Examples */}
          <b>JSX:</b>
          <pre>
            {`const element = <div className="myClass" tabIndex={0}></div>;`}
          </pre>
          <b>HTML:</b>
          <pre>
            {`<!-- HTML attribute names use kebab-case -->
<div class="myClass" tabindex="0"></div>`}
          </pre>
        </li>
        <li>
          {/* Rendering Dynamic Content */}
          JSX: Supports embedding JavaScript expressions to render dynamic content within the markup.
          <br />
          HTML: Static content is defined directly in the markup without the ability to embed JavaScript expressions.
          <br />
          <br />
          {/* Code Examples */}
          <b>JSX:</b>
          <pre>
            {`const message = "Dynamic Content!";
const element = <p>{message}</p>;`}
          </pre>
          <b>HTML:</b>
          <pre>
            {`<!-- HTML does not support embedded JavaScript -->
<p>Dynamic Content!</p>`}
          </pre>
        </li>
        <li>
          {/* Components */}
          JSX: Enables the definition of components using functions or classes, promoting a modular and reusable structure in React applications.
          <br />
          HTML: Lacks a built-in concept of components. HTML is primarily focused on structuring and presenting static content.
          <br />
          <br />
          {/* Code Examples */}
          <b>JSX:</b>
          <pre>
            {`function MyComponent(props) {
  return <p>{props.text}</p>;
}`}
          </pre>
          <b>HTML:</b>
          <pre>
            {`<!-- Components are not defined in HTML -->`}
          </pre>
        </li>
        <li>
          {/* Root Element Requirement */}
          JSX: Allows returning multiple elements without requiring a single root element. Fragments {'<></>'} can be used to wrap multiple elements.
          <br />
          HTML: Requires a single root element. All content must be nested within a single parent element.
          <br />
          <br />
          {/* Code Examples */}
          <b>JSX:</b>
          <pre>
            {`const elementWithMultiple = (
  <>
    <h1>Header</h1>
    <p>Paragraph</p>
  </>
);`}
          </pre>
          <b>HTML:</b>
          <pre>
            {`<!-- HTML requires a single root element -->
<div>
  <h1>Header</h1>
  <p>Paragraph</p>
</div>`}
          </pre>
        </li>
      </ul>
    </div>
  );
};

// Main Question2 component
function Question2() {
  const [message, setMessage] = useState('');

  // Callback function to be passed to a child component
  const handleCallback = (dataFromChild) => {
    setMessage(`Data received from child: ${dataFromChild}`);
  };

  return (
    <div style={{ display: 'flex' }}>
      {/* Main content */}
      <div>
        {/* Main Content Header */}
        <h2>Render Callback Example</h2>
        {/* Displaying Message from Child */}
        <p>{message}</p>
        {/* Render a child component and pass the callback as a prop */}
        <ChildComponent callback={handleCallback} />
      </div>

      {/* Information box */}
      {/* Render the InformationBox component */}
      <InformationBox />
    </div>
  );
}

// Child component that uses the callback(handleCallback)
function ChildComponent({ callback }) {
  const [customMessage, setCustomMessage] = useState('');

  const sendDataToParent = () => {
    // Call the callback function passed from the parent with custom message
    callback(customMessage);
  };

  const handleInputChange = (event) => {
    setCustomMessage(event.target.value);
  };

  return (
    <div>
      {/* Child Component Header */}
      <p>Child Component</p>
      {/* Input Field for Custom Message */}
      <label>
        Enter Custom Message:
        <input type="text" value={customMessage} onChange={handleInputChange} />
      </label>
      {/* Button to Send Data to Parent */}
      {/* senddatatoparent invokes the callback function which invokes the handlecallback in parent */}
      <button onClick={sendDataToParent}>Send Data to Parent</button>
    </div>
  );
}

export default Question2;
