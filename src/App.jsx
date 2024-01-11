
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, NavLink, Routes} from 'react-router-dom';
import './css/App.css';
import facade from './util/apiFacade';
import Login from './loginpage';
import Signup from './signup';
import UserPage from './userPage';
import AdminPage from './adminpage'; 


function App() {
  const [isAdmin, setIsAdmin] = useState(false);



  return (
    <Router>
      <header>
      
      <img src="./assets/ylogo.png" className="logo"  alt="yumiLogo" width="300" height="300" />
        <div className="menu-toggle" id="mobile-menu">
          <span></span>
          <span></span>
          <span></span>
        </div>
        <nav className="nav">
          <ul>
            <li><NavLink to="/" activeClassName="active">Home</NavLink></li>
            <li><NavLink to="/loginpage" activeClassName="active">Login</NavLink></li>
            <li><NavLink to="/user" activeClassName="active">User Page</NavLink></li>
            <li><NavLink to="/admin" activeClassName="active">Admin Page</NavLink></li>
            <li><NavLink to="signup" activeClassName="active">Signup</NavLink></li>
          </ul>
        </nav>
      </header>
    

   


      <Routes>
        <Route path="loginpage" element={<Login/>} />
      <Route path="/signup" element={<Signup/>} />
    <Route path="/user" element={<UserPage/>} />
    <Route path="/admin" element={<AdminPage isAdmin={isAdmin} />} />
      {/* Add other Routes as necessary */}
      </Routes>

      </Router>  
    
  );
  
}

export default App;
