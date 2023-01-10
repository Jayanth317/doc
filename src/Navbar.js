import React from 'react';
import { ReactDOM } from 'react';
import { Router,Route,Routes, Link } from 'react-router-dom';
import App from './App';
import Page1 from './page1';
import { Outlet } from 'react-router-dom';
import './navbar.css';

function Navbar() {
  return (
     
    <nav className='navbar '>
        <a href="/" className='site-title '>Home</a>
        <ul>
			<li><a href="/page1">Page-1</a></li>
        	<li><a href="/page2">Page-2</a></li>
	  </ul>
    </nav>
   
  );
}

export default Navbar;



