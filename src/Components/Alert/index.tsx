import * as React from "react";
import "./alert.css";

type Props = {
  position:
    | "top"
    | "bottom"
    | "top-left"
    | "top-right"
    | "bottom-left"
    | "bottom-right";
  message: string;
  type: "success" | "error" | "warning" | "info";
  onClose: () => void;
};

export const Alert: React.FC<Props> = (props) => {
  return (
    <div>
      <h1>Alert</h1>
    </div>
  );
};

