import React, {useState} from "react";
import { Outlet, Link } from "react-router-dom";
import "./layout.css";
import "../theme.css";
import { Menu } from 'primereact/menu';
import { Sling as Hamburger } from 'hamburger-react'
import useLocalStorage from 'use-local-storage'
import {IoMoon, IoSunny} from "react-icons/io5"
import {FaRegFilePdf} from "react-icons/fa"
import CV from '../Documents/cv.pdf';
import { BrowserView, MobileView } from 'react-device-detect';


const Layout = () => {
  const shouldShowMenu = Boolean(false)

  const handle = useFullScreenHandle();
  
  const showMenu = () => {
    setShouldShowMenu(!shouldShowMenu)
  }
  const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const [theme, setTheme] = useLocalStorage('theme', defaultDark ? 'dark' : 'light');

  const switchTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  }
  let items = [
    {label: 'New', icon: 'pi pi-fw pi-plus'},
    {label: 'Delete', icon: 'pi pi-fw pi-trash'}
];
  return (
    <div data-theme={theme}>
      <div className="menu">
        <Hamburger toggled={shouldShowMenu} toggle={() => showMenu()} />
      </div>
      <button onClick={handle.enter}style={{zIndex:999}}>test</button>
      {/* {shouldShowMenu ? 
        <div className="menu-content" >
            <a>home</a>
            <a>home</a>
        </div>
      : null} */}
      <Menu model={items} />

      {/* <MobileView>
        <Hamburger toggled={shouldShowMenu} toggle={() => showMenu()}/>
        {shouldShowMenu ? 
          <div className="menu show-menu">
            <Link to="/" onClick={() => showMenu()}>Home</Link>
            <Link to="/test" onClick={() => showMenu()}>Projects</Link>
            <button onClick={switchTheme}>
              {theme === "dark"? 
                  <IoSunny/>
                :
                  <IoMoon/>
                }
            </button>
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
                Projects
              </div>
            </div>
          </Link>
          <a href={CV} rel="noopener noreferrer" target="_blank">
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
      </BrowserView> */}
      {/* <Outlet /> */}
      
    </div>
  )
};

export default Layout;