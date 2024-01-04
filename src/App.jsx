
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, NavLink, Routes} from 'react-router-dom';
import './css/App.css';
import facade from './util/apiFacade';
import UserPage from './userPage';
import Signup from './signup';
import AdminPage from './adminpage'; // assuming you have an AdminPage component

function App() {
  const init = { username: "", password: "" };
  const [loginCredentials, setLoginCredentials] = useState(init);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [dataFromServer, setDataFromServer] = useState('Loading...');
  const [isAdmin, setIsAdmin] = useState(false);

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
            <li><NavLink to="/" activeClassName="active">Home</NavLink></li>
            <li><NavLink to="/user" activeClassName="active">User Page</NavLink></li>
            <li><NavLink to="/admin" activeClassName="active">Admin Page</NavLink></li>
            <li><a href="signup.html">Page 2</a></li>
          </ul>
        </nav>
      </header>

      <div className="box">
        <h1>Login</h1>
        <form onChange={onChange}>
          <input placeholder="Username or user email" id="username" defaultValue={loginCredentials.username} />
          <input placeholder="Password" id="password" defaultValue={loginCredentials.password} />
          <button onClick={performLogin}>Login</button>
          <a href="#" className="btns">login</a>
        </form>

        </div>
    

   


      <Routes>
      <Route path="/signup" element={<Signup/>} />
    <Route path="/user" element={<UserPage />} />
    <Route path="/admin" element={<AdminPage isAdmin={isAdmin} />} />
      {/* Add other Routes as necessary */}
      </Routes>

      </Router>  
    
  );
  
}

export default App;
