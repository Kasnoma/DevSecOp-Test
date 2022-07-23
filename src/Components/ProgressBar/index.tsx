import * as React from "react";
import { Step } from "./Step";
import "./progressbar.css";

type Prop = {
  currentStep: number;
};

export const Props: React.FC<Prop> = ({ currentStep }) => {
  return (
    <>
      <p>{currentStep}/4 </p>
      <ul className="steps">
        <Step id="step-1" step={1} />
        <Step id="step-2" step={2} />
        <Step id="step-3" step={3} />
        <Step id="step-4" step={4} />
      </ul>
    </>
  );
};

