import * as React from "react";
import { CenteredLogo } from "../../Components/CenteredLogo";
import { Button } from "../../Components/Button";
import { useNavigate } from "react-router-dom";
import "./splash.css";

export const Splash: React.FC = () => {
  const navigate = useNavigate();

  return (
    <>
      <CenteredLogo />
      <div className="splash">
        <div className="form">
          <h2>Sign in to Com X</h2>
          <p className="subtitle">Welcome to Com X</p>
          <Button
            text="Sign in"
            onClick={() => navigate("/sign-in")}
            className="btn-success"
          />
        </div>
        <div className="form">
          <h2>Create an Account</h2>
          <p className="subtitle">Join the family</p>
          <Button
            text="Register"
            onClick={() => navigate("/register")}
            className="btn-brown"
          />
        </div>
      </div>
    </>
  );
};

