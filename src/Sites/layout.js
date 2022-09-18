import React from "react";
import { Outlet, Link } from "react-router-dom";
import "./layout.css";
import "../theme.css";
import { VscThreeBars } from 'react-icons/vsc';
import useLocalStorage from 'use-local-storage'
import {IoMoon, IoSunny} from "react-icons/io5"
import {FaRegFilePdf} from "react-icons/fa"
import CV from '../Documents/cv.pdf';
import { BrowserView, MobileView, isBrowser, isMobile } from 'react-device-detect';

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
      <MobileView>
        <VscThreeBars className="menu-icon" size={25} onClick={() => showMenu()}/>
        {shouldShowMenu ? 
          <div className="menu show-menu" onClick={() => showMenu()}>
            <Link to="/">Home</Link>
            <Link to="/test">Test</Link>
            <button onClick={switchTheme}>Switch theme</button>
          </div>
        : null}
      </MobileView>
      <BrowserView>
        <div className="pc-menu">
          <Link to="/">
            <div className="pc-menu-item">
              <div className="pc-menu-item-title">
                Home
              </div>
            </div>
          </Link>
          <Link to="/test">
            <div className="pc-menu-item">
              <div className="pc-menu-item-title">
                Test
              </div>
            </div>
          </Link>
          <a href={CV} without rel="noopener noreferrer" target="_blank">
            <div className="pc-menu-item menu-icons">
              <div className="pc-menu-item-title">
                  <FaRegFilePdf/>
              </div>
            </div>
          </a>
          <div className="pc-menu-item menu-icons" onClick={switchTheme}>
            <div className="pc-menu-item-title">
              {theme === "dark"? 
                  <IoSunny/>
                :
                  <IoMoon/>
                }
            </div>
          </div>
        </div>      
      </BrowserView>

      <Outlet />
    </div>
  )
};

export default Layout;