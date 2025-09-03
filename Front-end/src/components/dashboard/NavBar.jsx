import React from 'react';
import {useAuth} from '../../context/authContext';


const NavBar = () => {
  const { user } = useAuth();

  return (
    <nav className="top-navbar">
      <div className="navbar-left">
        <p>Welcome, {user?.name || "Admin"}</p>
      </div>
    </nav>
  );
};

export default NavBar;
