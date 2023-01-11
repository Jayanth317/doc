import logo from './logo.svg';
import './App.css';
import { Route,Routes } from 'react-router-dom';
import Page1 from './page1';
import Page2 from './page2';
import Home from './home';
import Navbar from './Navbar';
import Resume from './resume';
import Project from './projects';
function App() {
  return (
    <div className='App'>
      <Navbar />
      <Routes>
        <Route path = "/" element = {<Home/>} />
        <Route path = "/page1" element = {<Page1/>} />
        <Route path = "/page2" element = {<Page2/>} />
        <Route path = "/resume" element = {<Resume/>} />
        <Route path = "/projects" element = {<Project/>} />

      </Routes>
     
    </div>
  );
}

export default App;
