import React from "react";

type Props = {
  label: number;
  className: string;
};

export const Step: React.FC<Props> = (props) => {
  return (
    <div className={`progress__item ${props.className}`}>
      <div className="progress__content">{props.label} </div>
    </div>
  );
};

