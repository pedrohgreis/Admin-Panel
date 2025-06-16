/* eslint-disable react/react-in-jsx-scope */
import { Routes, Route } from "react-router-dom";
import { Home } from "./Pages/Home";
import { History } from "./Pages/History";
import { Layout } from "./Layout";
import { ProfileContainer } from "./Pages/Profile";
import { Edit } from "./Pages/Edit";

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/history" element={<History />} />
        <Route path="/profile" element={<ProfileContainer />} />
        <Route path="/edit" element={<Edit />} />
      </Route>
    </Routes>
  );
};
