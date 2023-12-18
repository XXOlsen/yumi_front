import { useState, useEffect } from 'react';
import './App.css';
import facade from './util/apiFacade';

function App() {
  const init = { username: '', password: '' };
  const [loginCredentials, setLoginCredentials] = useState(init);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [dataFromServer, setDataFromServer] = useState('Loading...');

  useEffect(() => {
    facade.fetchData('hotels', 'GET').then((data) => setDataFromServer(data));
  }, [isLoggedIn]);

  const performLogin = (evt) => {
    evt.preventDefault();
    facade.login(
      loginCredentials.username,
      loginCredentials.password,
      setIsLoggedIn
    );
  };
  const onChange = (evt) => {
    setLoginCredentials({
      ...loginCredentials,
      [evt.target.id]: evt.target.value,
    });
  };

  return (
    <>
      <div class="box">
      
        <h1>Login</h1>

        <form onChange={onChange}>
          <input placeholder="Username or user email" id="username" />
          <input placeholder="Password" id="password" />
          <button onClick={performLogin}>Login</button>
          <a href="#" class="btns">Sign up</a>
        </form>
        </div>
    
  
    </>
  );
}

export default App;
