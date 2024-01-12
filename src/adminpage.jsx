import React, { useState } from 'react';
import './css/admin.css';

function AdminPage() {
  const [isAdmin, setIsAdmin] = useState(true); // Set the initial admin status

  return (
    <div>
      <h1>Admin Page</h1>
      {isAdmin ? (
        <>
          <p>Only for admins</p>
          <div className="flex">
            <div className="flexexamplep">
              <label htmlFor="username">Username:</label>
              <input type="text" name="username" placeholder="Enter your username" />

              <label htmlFor="password">Password:</label>
              <input type="password" name="password" placeholder="Enter your password" />

              <button type="submit">Login</button>
            </div>
          </div>
        </>
      ) : (
        <p>You do not have admin privileges to access this page.</p>
      )}
    </div>
  );
}

export default AdminPage;
