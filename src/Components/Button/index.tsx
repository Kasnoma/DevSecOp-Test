import * as React from "react";
import "./button.css";

type Props = {
  text: string;
  type?: "button" | "submit" | "reset";
  className?: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

export const Button: React.FC<Props> = (props) => {
  return (
    <button
      className={`btn ${props.className}`}
      type={props.type || "button"}
      onClick={props.onClick}
    >
      {props.text}
    </button>
  );
};

