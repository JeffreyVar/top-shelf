import React from 'react';
import { useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';

// Images
import menuIcon from './menuIcon.png'

// Material UI Imports
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

function MenuButton() {

  const user = useSelector((store) => store.user);
  const history = useHistory(); 
  
  const options = [
    'BACK',
    'HOME',
    'SAVED',
    'CREATE',
  ];

  const ITEM_HEIGHT = 48;

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const [selectedOption, setSelectedOption] = React.useState(options[0]);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = (selectedOption) => {
    setSelectedOption(selectedOption);
    setAnchorEl(null);
    if (selectedOption === 'SAVED' && user.id) {
      history.push('/savedlist');
    }
    if (selectedOption === 'HOME') {
      history.push('/');
    }
    if (selectedOption === 'BACK') {
      history.goBack(); // This will navigate back to the previous page
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
        <img class="menuIcon" src={menuIcon} alt="Menu Icon" />
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
            width: '20ch',
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

export default MenuButton;