import * as React from "react";
import { Step } from "./Step";
import "./progressbar.css";

type Prop = {
  currentStep: number;
};

export const ProgressBar: React.FC<Prop> = ({ currentStep }) => {
  const items = [
    { label: 1, active: true },
    { label: 2, active: false },
    { label: 3, active: false },
    { label: 4, active: false },
  ];

  items.map((item, index) => {
    if (index + 1 <= currentStep) {
      item.active = true;
    }
    return item;
  });

  const totalSteps = items.length;
  const activeSteps = items.filter((step) => step.active).length;
  const progressBarWidth =
    totalSteps >= 1 ? ((activeSteps - 1) / (totalSteps - 1)) * 100 : 33.33;

  return (
    <div className="progress">
      <div
        className="progress__bar"
        style={{ width: `${progressBarWidth}%` }}
      ></div>
      <div className="progress__items">
        {items.map((step, index) => (
          <Step
            key={index}
            label={step.label}
            className={step.active ? " active" : ""}
          />
        ))}
      </div>
    </div>
  );
};

