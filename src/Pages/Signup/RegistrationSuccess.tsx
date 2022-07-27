import * as React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "../../Components/Button";
import success_img from "../../assets/success.jpg";
import "./signup.css";

import { resetStep } from "../../store/rootSlice";
import { useAppDispatch } from "../../hooks";

import { TProps } from ".";

export const RegistrationSuccess: React.FC<TProps> = ({ prevStep }) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  return (
    <div className="registration__success">
      <div className="image__container">
        <img src={success_img} alt="woman" />
      </div>
      <h2>Registration Complete</h2>
      <p className="subtitle">
        Dear [Name], Your registration is now complete <br /> You may proceed to
        your dashboard and start trading commodities
      </p>
      <p>
        <Link
          to="/dashboard/market/order-book"
          className="text-danger"
          onClick={() => dispatch(resetStep())}
          replace
        >
          Go to Dashboard
        </Link>
      </p>

      <div className="form__buttons">
        <Button type="button" text="BACK" onClick={prevStep} />
        <Button
          type="submit"
          text="NEXT"
          onClick={() => {
            dispatch(resetStep());
            navigate("/dashboard/market/order-book", { replace: true });
          }}
          className="text-danger"
        />
      </div>
    </div>
  );
};

