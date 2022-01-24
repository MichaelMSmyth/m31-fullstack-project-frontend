import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TrelloBoard from "../components/TrelloBoard";

import Home from "../components/home";
import Landing from "../components/Landing";
import SignUp from "../components/signup";
import About from "../components/about";
import GetStarted from "../components/GetStarted";
import Boards from "../components/boards";
import ResetPassword from "../components/ResetPassword";
import Navbar from "../components/navbar";

const AppRouter = () => {
  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/:boardID" element={<TrelloBoard />} />
        <Route path="/about" element={<About />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/get-started" element={<GetStarted />} />
        <Route path="/boards" element={<Boards />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/" element={<Landing />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
