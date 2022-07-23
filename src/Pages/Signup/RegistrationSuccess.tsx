import * as React from "react";
import { Link } from "react-router-dom";
import success_img from "../../assets/success.png";

type Props = {};

export const RegistrationSuccess: React.FC<Props> = (props) => {
  return (
    <div className="registration__sucess">
      <img src={success_img} alt="woman" />
      <h2>Registration Complete</h2>
      <p className="subtitle">
        Dear [Name], Your registration is now complete <br /> You may proceed to
        your dashboard and start trading commodities
      </p>
      <Link to="/dashboard/market/order-book"></Link>
    </div>
  );
};

