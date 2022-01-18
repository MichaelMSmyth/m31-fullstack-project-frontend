import './App.css';
import {HomeComp} from './components/home';
import { LoginComp } from './components/login';
import { AboutComp } from './components/about';
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

export default function App() {
  const [modal,setmodal]= true
  return (
    <div>
    <Router>
      <div>
        <nav>
          <ul className='navbar neumorph card'>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/about" element={<About/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/" element={<Home/>}/>
        </Routes>
      </div>
    </Router>
    <div>
      <Modal/>
    </div>
    </div>
  );
}

function Home() {
  return (<HomeComp/>);
}

function About() {
  return (<AboutComp/>);
}

function Login() {
  return (<LoginComp/>);
}
