import * as React from "react";
// import { useNavigate } from "react-router-dom";
// import useWebSocket, { ReadyState } from "react-use-websocket";
import { DashboardNavbar } from "../../Components/DashboardNavbar";
import { DashboardSideBar } from "../../Components/DashboardSidebar";
import { DashboardLiveMarket } from "../../Components/DashboardLiveMarket";
import { DashboardSearch } from "../../Components/DashboardSearch";
// import { TradeLog } from "../../Components/TradeLog";
import "./dashboard.css";
// import Manager from "../../lib/encryption";

// const manager = new Manager({
//   key: process.env.KEY,
//   vector: process.env.VECTOR,
// });

type Props = {};

export const Dashboard: React.FC<Props> = (props) => {
  // const navigate = useNavigate();

  const [balances, setBalances] = React.useState<any[]>([]);

  const [livePrices, setLivePrices] = React.useState<any[]>([]);
  // const token: string | null = localStorage.getItem("comx_token");
  // React.useEffect(() => {
  //   if (!token) {
  //     return navigate("/welcome");
  //   }
  // });

  React.useEffect(() => {
    setBalances([
      {
        name: "Cash Balance",
        value: 8374363,
      },
      {
        name: "Securites Value",
        value: 8374363,
      },
      {
        name: "Loan balance",
        value: 7542264,
      },
    ]);
    setLivePrices([
      {
        name: "Soybean (SBBS)",
        price: 30834.59,
      },
      {
        name: "Maize (SMAZ)",
        price: 30834.59,
      },
      {
        name: "Sorghum (SSGM)",
        price: 30834.59,
      },
      {
        name: "Paddy Rice (SPRL)",
        price: 30834.59,
      },
      {
        name: "Soybean (SBBS)",
        price: 30834.59,
      },
      {
        name: "Cocoa (SCOC)",
        price: 30834.59,
      },
      {
        name: "Soybean (SBBS)",
        price: 30834.59,
      },
      {
        name: "Soybean (SBBS)",
        price: 30834.59,
      },
    ]);
  }, []);

  return (
    <section className="dashboard">
      <DashboardNavbar balances={balances} />
      <DashboardSideBar />
      <DashboardSearch />
      <article className="dashboard__inner"></article>
      <DashboardLiveMarket values={livePrices} />
    </section>
  );
};

