import React from "react";
import { Outlet, Link } from "react-router-dom";
import "./layout.css";
import { VscThreeBars } from 'react-icons/vsc';


const Layout = () => {
  const [shouldShowMenu, setShouldShowMenu] = React.useState(false)
  
  
  const showMenu = () => setShouldShowMenu(!shouldShowMenu)

  return (
    <>
      <VscThreeBars className="menu-icon" size={25} onClick={() => showMenu()}/>
      {shouldShowMenu ? 
        <div className="menu show-menu" onClick={() => showMenu()}>
          <Link to="/">Home</Link>
          <Link to="/test">Test</Link>
        </div>
      : null}
      

      <Outlet />
    </>
  )
};

export default Layout;