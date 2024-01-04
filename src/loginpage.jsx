import React from "react";
import { useState, useEffect } from 'react';
import facade from './util/apiFacade';
import "./css/index.css";
import "./css/signup.css";
import './css/App.css';

function Login() {

  const init = { username: "", password: "" };
  const [loginCredentials, setLoginCredentials] = useState(init);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [dataFromServer, setDataFromServer] = useState('Loading...');


  useEffect(() => {
    facade.fetchData("diary", "GET").then((data) => setDataFromServer(data));
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
 
  
      <div className="box">
        <h1>Login</h1>
        <form onChange={onChange}>
          <input placeholder="Username or user email" id="username" defaultValue={loginCredentials.username} />
          <input placeholder="Password" id="password" defaultValue={loginCredentials.password} />
          <button onClick={performLogin}>Login</button>
          <a href="#" className="btns">Sign up</a>
        </form>

        </div>
    

        
    
  );
  
}

export default Login;
