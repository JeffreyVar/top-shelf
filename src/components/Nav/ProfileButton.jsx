// React
import React from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

// Images
import profileIcon from './profileIcon.png'

// Material UI Imports
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

function ProfileButton() {

  const history = useHistory();
  const dispatch = useDispatch();

  const user = useSelector((store) => store.user);

  const options = [
    `Hi, ${user.username}`,
    'ABOUT',
    'LOGOUT',
  ];

  const ITEM_HEIGHT = 48;

  // Material UI

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const [selectedOption, setSelectedOption] = React.useState(options[0]);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (selectedOption) => {
    setSelectedOption(selectedOption);
    setAnchorEl(null);
    if (selectedOption === 'LOGOUT') {
      dispatch({ type: 'LOGOUT' });
    }
    if (selectedOption === 'ABOUT' && user.id) {
      history.push('/about');
    }
  };

  return (

    <div>
      <IconButton
        aria-label="more"
        id="long-button"
        aria-controls={open ? 'long-menu' : undefined}
        aria-expanded={open ? 'true' : undefined}
        aria-haspopup="true"
        onClick={handleClick}
      >
        <img class="profileIcon" src={profileIcon} alt="Profile Icon" />
      </IconButton>
      <Menu
        id="long-menu"
        MenuListProps={{
          'aria-labelledby': 'long-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: ITEM_HEIGHT * 4.5,
            width: '30ch',
          },
        }}
      >
        {options.map((option) => (
          <MenuItem key={option} selected={option === selectedOption} onClick={() => handleClose(option)}
            style={{
              fontFamily: 'Cormorant Garamond',
              fontSize: '18px',
              fontWeight: '500',
              borderBottom: '1px solid #242121',
              borderTop: '1px solid #242121',
            }}>
            {option}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
}

export default ProfileButton;