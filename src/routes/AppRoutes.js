import React from "react";
import { Route, Routes } from "react-router-dom";
import Store from "../components/Store/Store";
import Billing from "../components/Billing/Billing";
import User from "../components/User/User";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/user" element={<User />} />
      <Route path="/store" element={<Store />} />
      <Route path="/billing" element={<Billing />} />
    </Routes>
  );
};

export default AppRoutes;
