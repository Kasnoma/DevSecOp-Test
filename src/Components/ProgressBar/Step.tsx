import React from "react";

type Props = {
  id: string;
  step: number;
};

export const Step: React.FC<Props> = (props) => {
  return (
    <li className="step__item" id={props.id}>
      {props.step}{" "}
    </li>
  );
};
