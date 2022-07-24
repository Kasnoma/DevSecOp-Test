import * as React from "react";
import { useNavigate } from "react-router-dom";
import useWebSocket, { ReadyState } from "react-use-websocket";
import Manager from "../../lib/encryption";

const manager = new Manager({
  key: process.env.KEY,
  vector: process.env.VECTOR,
});

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

