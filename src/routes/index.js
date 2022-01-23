import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import TrelloBoard from "../components/TrelloBoard";
import Home from "../components/Home";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:boardID" element={<TrelloBoard />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
