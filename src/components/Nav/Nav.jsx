import React from 'react';
import { Link } from 'react-router-dom';
import LogOutButton from '../LogOutButton/LogOutButton';
import './Nav.css';
import { useSelector } from 'react-redux';
import HomeIcon from './HomeIcon.png'
import menuIcon from './menuIcon.png'
import profileIcon from './profileIcon.png'

function Nav() {
  const user = useSelector((store) => store.user);

  return (
    <div className="nav">
      <div className="realNav">
        <div><img class="menuIcon" src={menuIcon} alt="Menu Icon" /></div>
      <Link to="/home">
        {/* <h2 className="nav-title">Top Shelf</h2> */}
        <div><img class="homeIcon" src={HomeIcon} alt="Home Icon" /></div>
      </Link>
        <div><img class="profileIcon" src={profileIcon} alt="Profile Icon" /></div>
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
        {user.id && (
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
        </Link>
      </div>
    </div>
  );
}

export default Nav;
