import React from "react";
import { Routes, Route } from "react-router-dom";

import { Dashboard } from "./Pages/Dashboard";
import { Splash } from "./Pages/Splash";
import { Signin } from "./Pages/Signin";
import { Signup } from "./Pages/Signup";
import { ForgotPassword } from "./Pages/ForgotPassword";
import { OTPValidation } from "./Pages/OTPValidation";
import { ErrorPage } from "./Components/ErrorPage";

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
      {/* <Route path="*" element={<Navigate to="/welcome" replace />} /> */}
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
};

export default App;

