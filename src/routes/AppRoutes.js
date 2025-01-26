import React from "react";
import { Route, Routes, useNavigate, Navigate } from "react-router-dom";
import Store from "../components/Store/Store";
import Billing from "../components/Billing/Billing";
import Login from "../components/User/Login";
import Signup from "../components/User/Signup";
import GetShopDetails from "../components/shopDetails/GetShopDetails";
import CreateAndUpdateShopDetails from "../components/shopDetails/CreateAndUpdateShopDetails"; // Correct import statement

const PrivateRoute = ({ element: Component, ...rest }) => {
  const token = localStorage.getItem("jwtToken");
  return token ? <Component {...rest} /> : <Navigate to="/login" />;
};

const AppRoutes = () => {
  const navigate = useNavigate();

  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route
        path="/users"
        element={<PrivateRoute element={GetShopDetails} />}
      />
      <Route
        path="/users/CreateAndUpdateShopDetails"
        element={<PrivateRoute element={CreateAndUpdateShopDetails} />}
      />
      <Route
        path="/users/CreateAndUpdateShopDetails/:id"
        element={<PrivateRoute element={CreateAndUpdateShopDetails} />}
      />
      <Route path="/store" element={<PrivateRoute element={Store} />} />
      <Route path="/billing" element={<PrivateRoute element={Billing} />} />
    </Routes>
  );
};

export default AppRoutes;
