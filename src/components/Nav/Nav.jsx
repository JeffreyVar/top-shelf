// React
import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';

// Components
import HomeIcon from './HomeIcon.png'
import MenuButton from './MenuButton';
import ProfileButton from './ProfileButton';

// Styles
import './Nav.css';

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

      </div>
    </div>
  );
}

export default Nav;
