import * as React from "react";
import "./tradelog.css";

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
    <table className="trade__log">
      <tr>
        <th className="trade__log__head">Security</th>
        <th className="trade__log__head">Board</th>
        <th className="trade__log__head">Order Type</th>
        <th className="trade__log__head">Matched Price</th>
        <th className="trade__log__head">Quantity</th>
        <th className="trade__log__head">Date</th>
        <th className="trade__log__head">Time</th>
      </tr>
      {trades.map((trade, index) => (
        <tr key={index}>
          <td className="trade__log__cell">{trade.security}</td>
          <td className="trade__log__cell">{trade.board}</td>
          <td className="trade__log__cell">{trade.order_type}</td>
          <td className="trade__log__cell">{trade.matched_price}</td>
          <td className="trade__log__cell">{trade.quantity}</td>
          <td className="trade__log__cell">{trade.date}</td>
          <td className="trade__log__cell">{trade.time}</td>
        </tr>
      ))}
    </table>
  );
};

