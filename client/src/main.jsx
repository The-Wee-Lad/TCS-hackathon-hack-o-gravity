import React from "react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { WhistleblowerAuthProvider } from "./context/WhistleBlowerAuthContext.jsx";
import { DepartmentAuthProvider } from "./context/DepartmentAuthContext.jsx";
import { SuperAdminAuthProvider } from "./context/SuperAdminAuthContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <WhistleblowerAuthProvider>
      <DepartmentAuthProvider>
        <SuperAdminAuthProvider>
          <App />
        </SuperAdminAuthProvider>
      </DepartmentAuthProvider>
    </WhistleblowerAuthProvider>
  </StrictMode>
);

