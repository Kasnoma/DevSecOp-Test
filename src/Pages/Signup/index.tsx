import * as React from "react";
import { CenteredLogo } from "../../Components/CenteredLogo";
import { Button } from "../../Components/Button";
import "./signup.css";

import { IndividualLadder } from "./Individual";
import { CorporateLadder } from "./Corporate";

export type TProps = {
  nextStep: () => void;
  prevStep?: () => void;
  fillForm?: (values: any) => void;
};

export const Signup: React.FC = () => {
  const [individual, setIndividual] = React.useState(true);
  return (
    <>
      <CenteredLogo />
      <div className="splash">
        <div className="form">
          <h2>Register New Account</h2>
          <p>Sign up for an account and start trading today</p>

          <span className="lead">
            Select the category that best describes you.
          </span>

          <div className="selections">
            <Button
              type="button"
              className={individual ? "active" : undefined}
              text="Individual"
              onClick={() => setIndividual(true)}
            />
            <Button
              type="button"
              className={!individual ? "active" : undefined}
              text="Corporate"
              onClick={() => setIndividual(false)}
            />
          </div>

          {individual ? <IndividualLadder /> : <CorporateLadder />}
        </div>
      </div>
    </>
  );
};

