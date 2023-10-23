import React from "react";
import { Routes, Route } from "react-router-dom";
import Account from "../account/Account";
import Dashboard from "../dashboard/Dashboard";
import Login from "../login/Login";
import Products from "../products/Products";
const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />}></Route>
      <Route path="/dashboard" element= {<Dashboard/>}></Route>
      {/* <Route path="/dashboard" element={<Dashborad/>}></Route> */}
      <Route path="/products" element={<Products />}></Route>
      <Route path="/account" element={<Account />}></Route>
    </Routes>
  );
};

export default AppRoutes;