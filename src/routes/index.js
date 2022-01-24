import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TrelloBoard from "../components/TrelloBoard";

import Home from "../components/Home";
import Landing from "../components/Landing";
import SignUp from "../components/SignUp";
import About from "../components/About";
import GetStarted from "../components/GetStarted";
import Boards from "../components/Boards";
import ResetPassword from "../components/ResetPassword";

const AppRouter = () => {
  return (
    <BrowserRouter>
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
