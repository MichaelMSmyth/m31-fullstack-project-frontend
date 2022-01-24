import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TrelloBoard from "../components/TrelloBoard";
import { LandingComp } from "../components/Landing";
import { AboutComp } from "../components/about";
import { SignUp } from "../components/signup";
import { GetStarted } from "../components/get-started";
import { BoardsComp } from "../components/boards";
import { ResetComp } from "../components/resetpass";
import NAV from "../components/navbar";
import Home from "../components/Home";

const AppRouter = () => {
  return (
    <BrowserRouter>
    <NAV/>
      <Routes>
          <Route path="/about" element={<AboutComp/>}/>
          <Route path="/signup" element={<SignUp/>}/>
          <Route path="/get-started" element={<GetStarted/>}/>
          <Route path="/boards" element={<BoardsComp/>}/>
          <Route path="/reset-pass" element={<ResetComp/>}/>
          <Route path="/:boardID" element={<TrelloBoard />} />
          <Route path="/home" element={<Home/>}/>
          <Route path="/" element={<LandingComp/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
