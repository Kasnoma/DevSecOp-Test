import * as React from "react";
// import { useNavigate } from "react-router-dom";
// import useWebSocket, { ReadyState } from "react-use-websocket";
import { DashboardNavbar } from "../../Components/DashboardNavbar";
import { DashboardSideBar } from "../../Components/DashboardSidebar";
import { DashboardLiveMarket } from "../../Components/DashboardLiveMarket";
import { DashboardSearch } from "../../Components/DashboardSearch";
import { TradeLog } from "../../Components/TradeLog";
import { Table } from "../../Components/Table";
import "./dashboard.css";

export const Dashboard: React.FC = () => {
  // const navigate = useNavigate();

  const [balances, setBalances] = React.useState<any[]>([]);

  const [livePrices, setLivePrices] = React.useState<any[]>([]);

  const filter_trades = (key: string) => {
    console.log(key);
  };
  // const token: string | null = localStorage.getItem("comx_token");
  // React.useEffect(() => {
  //   if (!token) {
  //     return navigate("/welcome");
  //   }
  // });

  React.useEffect(() => {
    try {
      window.scroll({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    } catch (error) {
      // just a fallback for older browsers
      window.scrollTo(0, 0);
    }
  }, []);

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

  const buy_calls = [
    {
      id: "1",
      product: "Soybean (SBBS)",
      bid_type: "buy",
      bid_value: 1736.62,
      quantity: 4228,
    },
    {
      id: "2",
      product: "Paddy Rice (SPRL)",
      bid_type: "buy",
      bid_value: 1736.62,
      quantity: 4228,
    },
    {
      id: "3",
      product: "Maize (SMAZ)",
      bid_type: "buy",
      bid_value: 1736.62,
      quantity: 4228,
    },
    {
      id: "4",
      product: "Sorghum (SSGM)",
      bid_type: "buy",
      bid_value: 1736.62,
      quantity: 4228,
    },
    {
      id: "5",
      product: "Fair Trade ETC (FETC)",
      bid_type: "buy",
      bid_value: 1736.62,
      quantity: 4228,
    },
    {
      id: "6",
      product: "Fair Trade ETC (FETC)",
      bid_type: "buy",
      bid_value: 1736.62,
      quantity: 4228,
    },
  ];

  const sell_calls = [
    {
      id: "1",
      product: "Soybean (SBBS)",
      bid_type: "sell",
      bid_value: 1736.62,
      quantity: 4228,
    },
    {
      id: "2",
      product: "Paddy Rice (SPRL)",
      bid_type: "sell",
      bid_value: 1736.62,
      quantity: 4228,
    },
    {
      id: "3",
      product: "Maize (SMAZ)",
      bid_type: "sell",
      bid_value: 1736.62,
      quantity: 4228,
    },
    {
      id: "4",
      product: "Sorghum (SSGM)",
      bid_type: "sell",
      bid_value: 1736.62,
      quantity: 4228,
    },
    {
      id: "5",
      product: "Fair Trade ETC (FETC)",
      bid_type: "sell",
      bid_value: 1736.62,
      quantity: 4228,
    },
    {
      id: "6",
      product: "Fair Trade ETC (FETC)",
      bid_type: "sell",
      bid_value: 1736.62,
      quantity: 4228,
    },
  ];

  const trades = [
    {
      security: "Soybean (SBBS)",
      board: "X-Traded",
      order_type: "buy",
      matched_price: 1739.45,
      quantity: 17,
      date: "06/07/2022",
      time: "07:00",
    },
    {
      security: "Soybean (SBBS)",
      board: "X-Traded",
      order_type: "buy",
      matched_price: 1739.45,
      quantity: 17,
      date: "06/08/2022",
      time: "07:00",
    },
  ];

  return (
    <section className="dashboard">
      <DashboardNavbar balances={balances} />
      <DashboardSideBar />
      <DashboardSearch />
      <article className="dashboard__inner">
        <div className="filter__row">
          <div className="board">
            <span>Board</span>
            <span
              className="filter active"
              onClick={() => filter_trades("x-traded")}
            >
              X-Traded
            </span>
            <span className="filter" onClick={() => filter_trades("otc")}>
              OTC
            </span>
            <span className="filter" onClick={() => filter_trades("fi")}>
              FI
            </span>
            <span
              className="filter"
              onClick={() => filter_trades("derivative")}
            >
              Derivatives
            </span>
          </div>
          <div className="product">
            <span>Product</span>
            <span className="filter active" onClick={() => filter_trades("")}>
              All
            </span>
            <span className="filter" onClick={() => filter_trades("smaz")}>
              SMAZ
            </span>
            <span className="filter" onClick={() => filter_trades("sbbs")}>
              SBBS
            </span>
            <span className="filter" onClick={() => filter_trades("sprl")}>
              SPRL
            </span>
            <span className="filter" onClick={() => filter_trades("sgng")}>
              SGNG
            </span>
            <span className="filter" onClick={() => filter_trades("ssgm")}>
              SSGM
            </span>
            <span className="filter" onClick={() => filter_trades("fetc")}>
              FETC
            </span>
            <span className="filter" onClick={() => filter_trades("scoc")}>
              SCOC
            </span>
          </div>
        </div>
        <div className="tables">
          <Table values={buy_calls} />
          <Table values={sell_calls} />
        </div>
        <TradeLog trades={trades} />
      </article>
      <DashboardLiveMarket values={livePrices} />
    </section>
  );
};

