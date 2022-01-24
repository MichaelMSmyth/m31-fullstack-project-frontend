import React from "react";
import { useState, useEffect, useRef } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

// import * as THREE from 'three';
// import CLOUDS from "vanta/dist/vanta.clouds.min.js";
import styled from "styled-components";

import { FiMenu, FiLayout, FiX, FiLogOut } from "react-icons/fi";
import { BsQuestionDiamondFill } from "react-icons/bs";

import { signInFetch, signUpFetch, updateFetch, deleteFetch, tokenCheck, logOut } from "./utils/utils";

import { LandingComp } from "./components/Landing";
import { SignUp } from "./components/signup";
import { AboutComp } from "./components/About";
import { GetStarted } from "./components/GetStarted";
import { BoardsComp } from "./components/Boards";
import { ResetComp } from "./components/resetpass";

import "./App.css"; // Remove after integrating styles to styled components
import "react-pro-sidebar/dist/css/styles.css";

export default function App() {
  const [modal, setModal] = useState(true);
  const [log, Setlog] = useState(true);
  // states below not in use yet (crud)
  const [user, setUser] = useState();
  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [update, setUpdate] = useState(false);

  // Crud Handlers ( May need tweaking when integrating but core functionality is there )
  // Seting fetch request responses to state
  const signUpHandler = async (e) => {
    e.preventDefault();
    const returnValue = await signUpFetch(username, email, password);
    setUser(returnValue.user.username);
  };
  const signInHandler = async (e) => {
    e.preventDefault();
    try {
      const returnValue = await signInFetch(username, password);
      setUser(returnValue.username);
      setPassword(returnValue.password);
      window.location.reload(false);
    } catch (error) {
      console.log(error);
      alert("error");
    }
  };
  // Toggle for conditionally rendering the update user settings (might not need)
  const updateShow = () => {
    if (update === false) {
      setUpdate(true);
    } else if (update === true) {
      setUpdate(false);
    }
  };

  // Allows username to update as long as email is confirmed
  const updateHandler = async (e) => {
    e.preventDefault();
    try {
      await updateFetch(username, email);
      setUser(username);
      setEmail(email);
      alert(`Successfully updated Username to ${username}`);
      window.location.reload(false);
    } catch (error) {
      console.log(error);
      alert("error");
    }
  };

  // Deletes the user and jwt
  const deleteHandler = async () => {
    await deleteFetch(user, setUser);
    localStorage.clear();
  };

  // Removes jwt from localstorage and resets page
  const logOutHandler = async () => {
    await logOut();
    window.location.reload(false);
  };

  useEffect(() => {
    tokenCheck(localStorage.getItem("MyToken"), setUser);
  }, []);

  // Crud Handlers ( May need tweaking when integrating but core functionality is there )

  const isLoggedIn = () => {
    log ? Setlog(false) : Setlog(true);
  };

  const toggler = () => {
    modal ? setModal(false) : setModal(true);
  };

  return (
    <div>
      <div class="background">
        <div class="shape"></div>
        <div class="shape"></div>
      </div>
      <Router>
        <div>
          <nav>
            {!log ? (
              <div>
                {modal ? (
                  <button className="nodeco hamburger" onClick={toggler}>
                    <FiMenu />
                  </button>
                ) : (
                  <button className="nodeco x" onClick={toggler}>
                    <FiX />
                  </button>
                )}
              </div>
            ) : (
              <div />
            )}
            {!modal && (
              <ul className="navactive neumorph card">
                <div className="column">
                  <li>
                    <Link to="/boards">
                      <FiLayout />
                      Boards
                    </Link>
                  </li>
                  <li>
                    <Link to="/about">
                      <BsQuestionDiamondFill />
                      About
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <FiLogOut />
                      Logout
                    </Link>
                  </li>
                </div>
              </ul>
            )}
          </nav>
          <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/get-started" element={<Getstarted />} />
            <Route path="/boards" element={<Boards />} />
            <Route path="/reset-pass" element={<ResetPass />} />
            <Route path="/" element={<Landing />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

function Landing() {
  return <LandingComp />;
}
function About() {
  return <AboutComp />;
}
function Signup() {
  return <SignUp />;
}
function Getstarted() {
  return <GetStarted />;
}
function Boards() {
  return <BoardsComp />;
}
function ResetPass() {
  return <ResetComp />;
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
