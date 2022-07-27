import * as React from "react";

interface Trade {
  security: string;
  board: string;
  order_type: string;
  matched_price: number;
  quantity: number;
  date: string;
  time: string;
}

type Props = {
  trades: Array<Trade>;
};

export const TradeLog: React.FC<Props> = ({ trades }) => {
  return (
    <table className="call__table mt-1">
      <thead>
        <tr>
          <th>TRADE LOG</th>
          <th></th>
          <th></th>
          <th></th>
          <th></th>
          <th></th>
          <th></th>
        </tr>
      </thead>
      <thead>
        <tr>
          <th>Security</th>
          <th>Board</th>
          <th>Order Type</th>
          <th>Matched Price</th>
          <th>Quantity</th>
          <th>Date</th>
          <th>Time</th>
        </tr>
      </thead>
      <tbody>
        {trades.map((trade, index) => (
          <tr key={index} className="trade__row">
            <td>{trade.security}</td>
            <td>{trade.board}</td>
            <td>{trade.order_type}</td>
            <td>{trade.matched_price}</td>
            <td>{trade.quantity}</td>
            <td>
              {new Date(trade.date).toLocaleString("en", {
                year: "numeric",
                month: "short",
                day: "numeric",
              })}
            </td>
            <td>{trade.time}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

