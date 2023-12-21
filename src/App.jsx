import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import './App.css';
import facade from './util/apiFacade';
import UserPage from './userPage';
import AdminPage from './adminpage'; // assuming you have an AdminPage component

function App() {
  const init = { username: '', password: '' };
  const [loginCredentials, setLoginCredentials] = useState(init);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [dataFromServer, setDataFromServer] = useState('Loading...');
  const [isAdmin, setIsAdmin] = useState(false);

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
    <Router>
      <header>
        <div className="logo">index</div>
        <div className="menu-toggle" id="mobile-menu">
          <span></span>
          <span></span>
          <span></span>
        </div>
        <nav className="nav">
          <ul>
            <li><NavLink to="/" activeclassname="active">Home</NavLink></li>
            <li><NavLink to="/user" activeclassname="active">User Page</NavLink></li>
            <li><NavLink to="/admin" activeclassname="active">Admin Page</NavLink></li>
            <li><a href="signup.html">Page 2</a></li>
          </ul>
        </nav>
      </header>

      <div className="box">
        <h1>Login</h1>
        <form onChange={onChange}>
          <input placeholder="Username or user email" id="username" />
          <input placeholder="Password" id="password" />
          <button onClick={performLogin}>Login</button>
          <a href="#" className="btns">Sign up</a>
        </form>
      </div>


      <routes>
      <Route path="/user" component={UserPage} />
      <Route path="/admin" render={() => <AdminPage isAdmin={isAdmin} />} />
      {/* Add other Routes as necessary */}
      </routes>
    </Router>
  );
}

export default App;
