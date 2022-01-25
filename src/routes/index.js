import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TrelloBoard from "../components/TrelloBoard";

import Landing from "../components/Landing";
import SignUp from "../components/Sign-Up";
import GetStarted from "../components/GetStarted";
import ResetPassword from "../components/ResetPassword";
import NavBar from "../components/NavBar";
import Settings from "../components/Settings";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/home" element={<TrelloBoard />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/get-started" element={<GetStarted />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/" element={<Landing />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
