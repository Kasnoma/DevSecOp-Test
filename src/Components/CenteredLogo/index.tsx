import * as React from "react";
import "./logo.css";
import logo from "../../assets/logo.png";

export const CenteredLogo: React.FC = () => {
  return (
    <div className="logo">
      <img src={logo} alt="logo" />
    </div>
  );
};

