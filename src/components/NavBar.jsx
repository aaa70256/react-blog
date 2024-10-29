import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import photoImg from '../assets/photo.jpg';
import "../style/componentStyle/navbar.scss"
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { getItem } from "../utils/localStorage";


function NavBar({onRouteChange}) {
  const routePageHandler = (data)=>{
    onRouteChange(data);
  }
  const name = JSON.parse(getItem("user")).name
  const id = JSON.parse(getItem("user")).id
  return (
    <div className='navbar_container'>
      <div className='head_shot'>
        <Avatar alt="photo" src={photoImg} sx={{ width: 100, height: 100 }}/>
        <div className='person_info'>
          <p>{name}</p>
          <p>@{id}</p>
        </div>
      </div>
      <nav className='nav_link'>
        <List>
          <ListItem disablePadding>
            <ListItemButton onClick={()=>{routePageHandler("/home")}}>
              <ListItemText primary="ＨＯＭＥ" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton  onClick={()=>{routePageHandler("/posts")}}>
              <ListItemText primary="ＰＯＳＴＳ" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton  onClick={()=>{routePageHandler("/")}}>
              <ListItemText primary="ＳＥＴＴＩＮＧ" />
            </ListItemButton>
          </ListItem>
        </List>
      </nav>
    </div>
  )
}

export default NavBar