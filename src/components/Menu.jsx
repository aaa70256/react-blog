import React, { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { removeItem } from "../utils/localStorage";
import { useNavigate } from 'react-router-dom'



export function BasicMenu() {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className='menu_container'>
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        startIcon={<MoreVertIcon fontSize="large" color="action" />}
      />
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
    </div>
  );
}

export const UserMenu = ({ show, currentTarget, setOpen }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (show) {
      // 當 show 是 true 時，設置錨點並開啟菜單
      setAnchorEl(currentTarget);
    } else {
      // 當 show 是 false 時，重置錨點
      setAnchorEl(null);
    }
  }, [show, currentTarget]);

  const handleClose = () => {
    setOpen(false);
  };

  const logOutHandler = () => {
    handleClose(); // 註冊 handleClose 在菜單項目上
    removeItem("user");
    navigate('login');
  };

  return (
    <Menu
      id="basic-menu"
      anchorEl={anchorEl}
      open={Boolean(anchorEl)} // 菜單開啟狀態根據 anchorEl 判斷
      onClose={handleClose}
      MenuListProps={{
        'aria-labelledby': 'basic-button',
      }}
    >
      <MenuItem onClick={logOutHandler}>登出</MenuItem>
    </Menu>
  );
};