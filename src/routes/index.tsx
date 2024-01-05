import { Route, Routes } from "react-router-dom";
import { Dashboard, ErrorPage, LoginPage, RegisterPage } from "../pages";
import React from "react";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
};

export { MainRoutes };
