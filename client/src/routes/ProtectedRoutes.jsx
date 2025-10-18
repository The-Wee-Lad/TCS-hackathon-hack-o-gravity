import React from "react";
import { Navigate } from "react-router-dom";
import { useWhistleblowerAuth } from "../context/WhistleBlowerAuthContext";
import { useDepartmentAuth } from "../context/DepartmentAuthContext";
import { useSuperAdminAuth } from "../context/SuperAdminAuthContext";

const ProtectedRoute = ({ children, role }) => {
  const { user } = useWhistleblowerAuth();
  const { admin } = useDepartmentAuth();
  const { superAdmin } = useSuperAdminAuth();
  if (role === "whistleblower" && !user) {
    return <Navigate to="/whistleblower-login" replace />;
  }
  if (role === "department" && !admin) {
    return <Navigate to="/department-login" replace />;
  }
  if (role === "superadmin" && !superAdmin) {
    return <Navigate to="/admin/login" replace />;
  }
  return children;
};

export default ProtectedRoute;
