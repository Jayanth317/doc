import React from 'react';
import { ReactDOM } from 'react';
import { Router,Route,Routes, Link } from 'react-router-dom';
import App from './App';
import Page1 from './page1';
import { Outlet } from 'react-router-dom';
function Navbar() {
  return (
     
    <div>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/page1">Page1</Link>
      </li>
      <li>
        <Link to="/page2">Page2</Link>
      </li>
    </div>
   
  );
}

export default Navbar;



