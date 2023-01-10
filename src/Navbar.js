import React from 'react';
import { ReactDOM } from 'react';
import { Router,Route,Routes, Link } from 'react-router-dom';
import App from './App';
import Page1 from './page1';
import { Outlet } from 'react-router-dom';
import './navbar.css';
import logo from './logo192.png'
function Navbar() {
  return (
     
    <nav className='navbar '>
		<ul>
		<a href="/" className='site-title '> <img src={logo} alt={"logo"} width={40} height={40} /></a>
        <a href="/" className='site-title '>Home</a>
		</ul>
        <ul>
			<li><a href="/page1">Page-1</a></li>
        	<li><a href="/page2">Page-2</a></li>
	  </ul>
    </nav>
   
  );
}

export default Navbar;



