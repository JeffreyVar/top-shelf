import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import LogOutButton from '../LogOutButton/LogOutButton';
import './Nav.css';
import { useSelector } from 'react-redux';
import HomeIcon from './HomeIcon.png'
import profileIcon from './profileIcon.png'

import MenuButton from './MenuButton';
import ProfileButton from './ProfileButton';

// Material UI Imports
// import IconButton from '@mui/material/IconButton';
// import Menu from '@mui/material/Menu';
// import MenuItem from '@mui/material/MenuItem';

function Nav() {

  const user = useSelector((store) => store.user);
  const history = useHistory(); 

  return (
    <div className="nav">
      <div className="realNav">
        <div>
          <MenuButton />
        </div>

      <Link to="/home">
        {/* <h2 className="nav-title">Top Shelf</h2> */}
        <div><img class="homeIcon" src={HomeIcon} alt="Home Icon" /></div>
      </Link>
        <div>
          <ProfileButton />
        </div>
      </div>
      <div>
        {/* If no user is logged in, show these links */}
        {!user.id && (
          // If there's no user, show login/registration links
          <Link className="navLink" to="/login">
            Login / Register
          </Link>
        )}

        {/* If a user is logged in, show these links */}
        {/* {user.id && (
          <>
            <Link className="navLink" to="/user">
              Home
            </Link>

            <Link className="navLink" to="/info">
              Info Page
            </Link>

            <LogOutButton className="navLink" />
          </>
        )}

        <Link className="navLink" to="/about">
          About
        </Link> */}
      </div>
    </div>
  );
}

export default Nav;
