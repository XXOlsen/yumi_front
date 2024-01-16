import React, { useState } from 'react';

const Question6 = () => {
  const [data, setData] = useState('');
  const [localStorageData, setLocalStorageData] = useState('');
  const [sessionStorageData, setSessionStorageData] = useState('');

  const handleInputChange = (event) => {
    setData(event.target.value);
  };

  const handleSaveLocal = () => {
    localStorage.setItem('localData', data);
    setLocalStorageData(localStorage.getItem('localData'));
  };

  const handleSaveSession = () => {
    sessionStorage.setItem('sessionData', data);
    setSessionStorageData(sessionStorage.getItem('sessionData'));
  };

  const handleClearStorage = () => {
    localStorage.removeItem('localData');
    sessionStorage.removeItem('sessionData');
    setLocalStorageData('');
    setSessionStorageData('');
  };

  return (
    <div>
      <h2>Local Storage vs Session Storage</h2>
      <label>
        Enter Data:
        <input type="text" value={data} onChange={handleInputChange} />
      </label>
      <br />
      <button onClick={handleSaveLocal}>Save to Local Storage</button>
      <button onClick={handleSaveSession}>Save to Session Storage</button>
      <button onClick={handleClearStorage}>Clear Storage</button>
      <br />
      <div>
        <strong>Local Storage:</strong> {localStorageData || 'No data'}
      </div>
      <div>
        <strong>Session Storage:</strong> {sessionStorageData || 'No data'}
      </div>
    </div>
  );
};

export default Question6;
