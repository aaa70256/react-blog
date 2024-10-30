import NavBar from "./components/NavBar"
import Search from "./components/Search";
import "./style/app.scss"
import { Outlet, useNavigate } from "react-router-dom";
import { getServer } from "./service/api";
import { useEffect, useState } from "react";




function App() {

  const navigate = useNavigate();

  const handleRoute = (path) => {
    navigate(path);
  }

  return (
    <>
      <div className="app_container">
        <NavBar onRouteChange={handleRoute} />
        <div className="app_content">
          <Search />
          <Outlet />
        </div>
      </div>
    </>
  )
}

export default App
