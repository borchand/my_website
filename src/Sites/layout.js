import React from "react";
import { Outlet, Link } from "react-router-dom";
import "./layout.css";
import "../theme.css";
import { VscThreeBars } from 'react-icons/vsc';
import useLocalStorage from 'use-local-storage'

const Layout = () => {
  const [shouldShowMenu, setShouldShowMenu] = React.useState(false)
  
  
  const showMenu = () => setShouldShowMenu(!shouldShowMenu)

  const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const [theme, setTheme] = useLocalStorage('theme', defaultDark ? 'dark' : 'light');

  const switchTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  }
  return (
    <div data-theme={theme}>
      <VscThreeBars className="menu-icon" size={25} onClick={() => showMenu()}/>
      {shouldShowMenu ? 
        <div className="menu show-menu" onClick={() => showMenu()}>
          <Link to="/">Home</Link>
          <Link to="/test">Test</Link>
          <button onClick={switchTheme}>Switch theme</button>
        </div>
      : null}
      

      <Outlet />
    </div>
  )
};

export default Layout;