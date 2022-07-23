import * as React from "react";
import { useNavigate } from "react-router-dom";

type Props = {};

export const Dashboard: React.FC<Props> = (props) => {
  const navigate = useNavigate();
  const token: string | null = localStorage.getItem("comx_token");
  React.useEffect(() => {
    if (!token) {
      return navigate("/welcome");
    }
  });
  return (
    <div>
      <h1>Dashboard</h1>
    </div>
  );
};

