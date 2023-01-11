import React from 'react';
import { ReactDOM } from 'react';
import { Router, Route, Routes, Link } from 'react-router-dom';
import App from './App';
import Page1 from './page1';
import { Outlet } from 'react-router-dom';
import s from './navbar.module.css';
import logo from './logo192.png'

function Navbar() {
  return (

    <nav className={s.navbar}>
      <ul>
        <a href="/" className={s.site_title}> <img src={logo} alt={"logo"} width={40} height={40} /></a>
        <a href="/" className={s.site_title}>Home</a>
      </ul>
      <ul1>
        <li><a href="/page1">Page-1</a></li>
        <li><a href="/page2">Page-2</a></li>
        <li><a href="/projects">Projects</a></li>
        <li><a href="/resume">Resume</a></li>
      </ul1>
    </nav>

  );
}

export default Navbar;



