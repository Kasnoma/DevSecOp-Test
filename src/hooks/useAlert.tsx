import * as React from "react";

const useAlert = () => {
  const [alert, setAlert] = React.useState<{
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
  }>();

  const showAlert = (
    position:
      | "top"
      | "bottom"
      | "top-left"
      | "top-right"
      | "bottom-left"
      | "bottom-right",
    message: string,
    type: "success" | "error" | "warning" | "info"
  ) => {
    setAlert({
      position,
      message,
      type,
      onClose: () => setAlert(undefined),
    });
  };

  return { alert, showAlert };
};
