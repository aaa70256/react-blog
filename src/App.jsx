import NavBar from "./components/NavBar"
import "./style/app.scss"
import { Outlet,useNavigate } from "react-router-dom";


function App() {
  const navigate = useNavigate();

  const handleRoute = (path) => {
    navigate(path);
  }

  
  return (
    <>
      <div className="app_container">
        <NavBar onRouteChange={handleRoute}/>
        <Outlet />
      </div>
    </>
  )
}

export default App
