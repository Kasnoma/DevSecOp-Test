import * as React from "react";
import { Button } from "../Button";
import { useNavigate } from "react-router-dom";
import "./error.css";

export const ErrorPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section className="error__page">
      <h2>Epp me Epp Me, E dey carry me go where I no know</h2>
      <Button
        onClick={() => navigate(-1)}
        text="Go Back"
        type="button"
        className="btn-outline-danger"
      />
    </section>
  );
};

