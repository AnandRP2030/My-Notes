import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import AdminLogin from "./componets/admin/adminLogin.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import AdminDashboard from "./componets/admin/adminDashboard.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/*" element={<h1> 503 </h1>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
