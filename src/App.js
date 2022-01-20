import './App.css';
import * as THREE from 'three';
import CLOUDS from "vanta/dist/vanta.clouds.min.js";
import styled from 'styled-components'
import {HomeComp} from './components/home';
import { LogOutComp } from './components/logout';
import {SignUp} from './components/signup';
import { AboutComp } from './components/about';
import { FiMenu, FiLogIn, FiX} from "react-icons/fi";
import {AiFillHome} from "react-icons/ai";
import {BsQuestionDiamondFill} from "react-icons/bs";
import { signInFetch, signUpFetch, updateFetch, deleteFetch, tokenCheck, logOut} from './utils/utils';
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import { useState, useEffect, useRef } from 'react';

export default function App() {
  const [modal,setModal] = useState(true);
  const [log,Setlog] = useState(true);

  const isLoggedIn = () => {
    log ? Setlog(false) : Setlog(true);
  }
  const toggler = () => {
    modal ? setModal(false): setModal(true);
  }

  return (
    <div>
    <div class="background">
        <div class="shape"></div>
        <div class="shape"></div>
    </div>
    <Router>
      <div>
        <nav>
          {/* {!log ? ( */}
        <button className='nodeco hamburger' onClick={toggler}>
          <FiMenu/>
        </button>
        {/* ):(<div/>)} */}
        {!modal ?
          <ul className='navbar neumorph card'>
            <button className='nodeco x' onClick={toggler}>
          <FiX/>
        </button>
            <li>
              <Link to="/"><AiFillHome/>Home</Link>
            </li>
            <li>
              <Link to="/about"><BsQuestionDiamondFill/>About</Link>
            </li>
            <li>
              <Link to="/logout"><FiLogIn/>Logout</Link>
            </li>
          </ul>
          :<div></div>} 
        </nav>
        <Routes>
          <Route path="/about" element={<About/>}/>
          <Route path="/logout" element={<Logout/>}/>
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/" element={<Home/>}/>
        </Routes>
      </div> 
    </Router>
    </div>
  );

}

// Still testing but will use vantajs to create animated background
// const AnimateBG = () => {
//   const [vantaEffect, setVantaEffect] = useState(0)
//   const myRef = useRef(null)
//   useEffect(() => {
//     if (!vantaEffect) {
//       setVantaEffect(CLOUDS({
//         el: myRef.current
//       }))
//     }
//     return () => {
//       if (vantaEffect) vantaEffect.destroy()
//     }
//   }, [vantaEffect])
//   return <div ref={myRef}></div>
// }

function Home() {
  return (<HomeComp/>);
}

function About() {
  return (<AboutComp/>);
}

function Logout() {
  return (<LogOutComp/>);
}

function Signup() {
  return (<SignUp/>)
}
