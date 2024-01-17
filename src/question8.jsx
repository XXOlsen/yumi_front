import React from 'react';

const EventExample = () => {
  const handleEvent = (phase, event) => {
    console.log(`Capturing phase: ${phase} - ${event.target.id}`);
  };

  return (
    <div id="outer" onClick={(e) => handleEvent('bubbling', e)}>
      <p id="middle" onClick={(e) => handleEvent('bubbling', e)}>
        Click me to see event capturing and bubbling!
        <button id="inner" onClick={(e) => handleEvent('bubbling', e)}>
          Click me too!
        </button>
      </p>
      <p id="middle2" onClick={(e) => handleEvent('bubbling', e)}>
        Another paragraph
      </p>
    </div>
  );
};

export default EventExample;
