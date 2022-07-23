import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import "./App.css";

import { Dashboard } from "./Pages/Dashboard";
import { Splash } from "./Pages/Splash";
import { Signin } from "./Pages/Signin";
import { Signup } from "./Pages/Signup";
import { ForgotPassword } from "./Pages/ForgotPassword";
import { OTPValidation } from "./Pages/OTPValidation";

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="welcome" element={<Splash />} />
      <Route path="sign-in">
        <Route index element={<Signin />} />
        <Route path="password-reset">
          <Route index element={<ForgotPassword />} />
          <Route path="otp-validation" element={<OTPValidation />} />
        </Route>
      </Route>
      <Route path="register" element={<Signup />} />
      <Route path="dashboard/market/order-book" element={<Dashboard />} />
      <Route path="*" element={<Navigate to="/welcome" replace />} />
    </Routes>
  );
};

export default App;

