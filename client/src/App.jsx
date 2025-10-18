import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "./utils/ScrollToTop";
import HomePage from "./pages/HomePage";
import RegisterComplaintForm from "./pages/RegisterComplaintForm";
import StatusCheckPage from "./pages/StatusCheckPage";
import SuperAdminLoginPage from "./pages/SuperAdminLoginPage";
import AdminDashboard from "./pages/AdminDashboard";
import ReportDetailPage from "./pages/ReportDetailPage";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import ChatPage from "./pages/ChatPage";
import ShowComplaintDetails from "./pages/ShowComplaintDetails";
import WhistleblowerLoginPage from "./pages/WhistleblowerLoginPage";
import DepartmentLoginPage from "./pages/DepartmentLoginPage";
import ProtectedRoute from "./routes/ProtectedRoutes";
import axios from "axios";
import WhistleBlowerDashboard from "./pages/WhistleBlowerDashboard";
import DepartmentDashboard from "./pages/DepartmentDashboard";
import AddDepartment from "./pages/AddDepartment";

axios.defaults.withCredentials = true;
export const tunnel = "https://h8z77pp8-8000.inc1.devtunnels.ms";
export const localhost = "http://localhost:8000";
export const baseUrl = localhost;

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<HomePage />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/report" element={<RegisterComplaintForm />} />
        <Route path="/status" element={<StatusCheckPage />} />

        {/* Whistleblower Auth */}
        <Route path="/whistleblower-login" element={<WhistleblowerLoginPage />} />
        <Route
          path="/complaint/:id"
          element={
            //<ProtectedRoute role="whistleblower">
            <ShowComplaintDetails />
            //</ProtectedRoute>
          }
        />
        <Route
          path="/chat/:id"
          element={
            //<ProtectedRoute role="whistleblower">
            <ChatPage />
            //</ProtectedRoute>
          }
        />
        <Route
          path="/whistleblower/dashboard"
          element={
            // <ProtectedRoute role="whistleblower">
            <WhistleBlowerDashboard />
            //</ProtectedRoute>
          }
        />

        {/* Department Auth */}
        <Route path="/department-login" element={<DepartmentLoginPage />} />
        <Route
          path="/department/dashboard"
          element={
            // <ProtectedRoute role="department">
            <DepartmentDashboard />
            //</ProtectedRoute>
          }
        />
        <Route
          path="/admin/reports/:id"
          element={
            //<ProtectedRoute role="department">
            <ReportDetailPage />
            //</ProtectedRoute>
          }
        />

        {/* Super Admin Auth */}
        <Route path="/admin-login" element={<SuperAdminLoginPage />} />
        <Route
          path="/admin/dashboard"
          element={
            // <ProtectedRoute role="admini">
            <AdminDashboard />
            //</ProtectedRoute>
          }
        />
        <Route
          path="/admin/add-department"
          element={
            // <ProtectedRoute role="admini">
            <AddDepartment />
            //</ProtectedRoute>
          }
        />

      </Routes>
    </Router>
  );
}
