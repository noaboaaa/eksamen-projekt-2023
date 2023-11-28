import React, { useState } from "react";

const Admin = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    // Implement login logic here
    setLoggedIn(true);
  };

  return (
    <div>
      {!loggedIn ? (
        <form onSubmit={handleLogin}>
          <label>
            Username:
            <input type="text" name="username" />
          </label>
          <label>
            Password:
            <input type="password" name="password" />
          </label>
          <button type="submit">Login</button>
        </form>
      ) : (
        <div>
          <button>View Bookings</button>
          <button>Edit Availabilities</button>
          <button>Update Opening Hours</button>
        </div>
      )}
    </div>
  );
};

export default Admin;
