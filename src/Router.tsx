/* eslint-disable react/react-in-jsx-scope */
import { Routes, Route } from "react-router-dom";
import { Home } from "./Pages/Home";

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
};
