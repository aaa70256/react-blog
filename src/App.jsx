import React, { useContext, useEffect, useState } from 'react'
import NavBar from "./components/NavBar"
// import Search from "./components/Search";
import { AutocompleteInput } from "./components/Autocomplete";
import "./style/app.scss"
import { Outlet, useNavigate, useLocation } from "react-router-dom";
import MyContext from './utils/userContext';
import { getServer } from "./service/api";
import Collapse from '@mui/material/Collapse';


function App() {
  const { setValue } = useContext(MyContext);
  const [open, setOpen] = useState(true);
  const [appClass, setAppClass] = useState("");
  const navigate = useNavigate();
  const location = useLocation();


  const handleRoute = (path) => {
    console.log(path);
    setOpen(path !== "/profile");
    navigate(path);
  }

  useEffect(() => {
    getServer.users().then(res => {
      setValue(res.data);
    })
    //重新整理後如果是profile頁面 讓他維持false狀態
    setOpen(location.pathname !== "/profile")
  }, [])

  useEffect(() => {
    const classData = open ? "app_content" : "app_content app_content_non_gap"
    setAppClass(classData)
  }, [open])

  return (
    <>
      <div className="app_container">
        <NavBar onRouteChange={handleRoute} />
        <div className={appClass}>
          <Collapse in={open}>
            <AutocompleteInput />
          </Collapse>
          <Outlet />
        </div>
      </div>
    </>
  )
}

export default App
