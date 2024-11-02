import React, { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import "../style/componentStyle/navbar.scss"
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { getItem } from "../utils/localStorage";
import { photoUrl } from "../utils/dynamicAddPhoto";
import { UserMenu } from "../components/Menu";


function NavBar({ onRouteChange }) {
  const [open, setOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const routePageHandler = (data) => {
    onRouteChange(data);
  }
  const localStorageData = JSON.parse(getItem("user"))
  let name = '';
  let id = '';
  let url = '';
  if (localStorageData) {
    name = localStorageData.name
    id = localStorageData.id
    url = photoUrl(localStorageData.headshot)
  }
  const openUserMenuHandle = (e) => {
    setOpen(true);
    setAnchorEl(e.currentTarget);
  }
  return (
    <div className='navbar_container'>
      <div className='head_shot'>
        <Avatar alt="photo" src={url} sx={{ width: 100, height: 100 }} />
        <div className='person_info'>
          <p onClick={openUserMenuHandle}>{name}</p>
          <UserMenu show={open} currentTarget={anchorEl} setOpen={setOpen} />
          <p>@{id}</p>
        </div>
      </div>
      <nav className='nav_link'>
        <List>
          <ListItem disablePadding>
            <ListItemButton onClick={() => { routePageHandler("/home") }}>
              <ListItemText primary="ＨＯＭＥ" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton onClick={() => { routePageHandler("/posts") }}>
              <ListItemText primary="ＰＯＳＴＳ" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton onClick={() => { routePageHandler("/profile") }}>
              <ListItemText primary="ＰＲＯＦＩＬＥ" />
            </ListItemButton>
          </ListItem>
        </List>
      </nav>
    </div>
  )
}

export default NavBar