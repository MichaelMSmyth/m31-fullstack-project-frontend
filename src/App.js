import './App.css';
import * as THREE from 'three';
import CLOUDS from "vanta/dist/vanta.clouds.min.js";
import {HomeComp} from './components/home';
import { LoginComp } from './components/login';
import { AboutComp } from './components/about';
import { FiMenu, FiLogIn} from "react-icons/fi";
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
    {!log ? (
      <button className='nodeco hamburger' onClick={toggler}>
        <FiMenu/>
      </button>
      ):(<div/>)}
    <Router>
      <div>
        <nav>
        {!modal ?
          <ul className='navbar neumorph card'>
            <li>
              <Link to="/"><AiFillHome/>Home</Link>
            </li>
            <li>
              <Link to="/about"><BsQuestionDiamondFill/>About</Link>
            </li>
            <li>
              <Link to="/login"><FiLogIn/>Login</Link>
            </li>
          </ul>
          :<div></div>}
        </nav>
        <Routes>
          <Route path="/about" element={<About/>}/>
          <Route path="/login" element={<Login/>}/>
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

const PasswordHide = () =>{
  const [passwordShown, setPasswordShown] = useState(false);
  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };

  return (
    <div>
      <input type={passwordShown ? "email" : "password"} />
      <button onClick={togglePassword}>Show Password</button>
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
