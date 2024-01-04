
import { useState, useEffect } from 'react';
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, NavLink, Routes} from 'react-router-dom';
import './css/App.css';
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

<header>

        <div class="logo">index</div>
        <div class="menu-toggle" id="mobile-menu">
            <span></span>
            <span></span>
            <span></span>
        </div>
        <nav class="nav">
            <ul>
                <li><a href="index.html" class="active">Home</a></li>
                <li><a href="userpage.html">Page 1</a></li>
                <li><a href="signup.html">Page 2</a></li>
            </ul>
        </nav>

    </header>

      <div class="box">
      
        <h1>Login</h1>

        <form onChange={onChange}>
          <input placeholder="Username or user email" id="username" />
          <input placeholder="Password" id="password" />
          <button onClick={performLogin}>Login</button>
          <a href="#" class="btns">Sign up</a>
        </form>

        </div>
    

   


      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signup" element={<Signup setUser={setUser} />} />
    <Route path="/user" element={<UserPage />} />
    <Route path="/admin" element={<AdminPage isAdmin={isAdmin} />} />
      {/* Add other Routes as necessary */}
      </Routes>

  
    </>
  );
}

export default App;
