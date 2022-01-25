import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TrelloBoard from "../components/TrelloBoard";

import Landing from "../components/Landing";
import SignUp from "../components/SignUp";
import GetStarted from "../components/GetStarted";
import ResetPassword from "../components/ResetPassword";
import Navbar from "../components/NavBar";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/home" element={<TrelloBoard />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/get-started" element={<GetStarted />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/" element={<Landing />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
