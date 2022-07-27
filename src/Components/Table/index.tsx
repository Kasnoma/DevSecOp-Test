import * as React from "react";
import { Button } from "../Button";

import "./table.css";

interface CallOption {
  id: string;
  product: string;
  bid_type: string;
  bid_value: number;
  quantity: number;
}
type Props = {
  values: CallOption[];
};

export const Table: React.FC<Props> = (props) => {
  return (
    <table className="call__table">
      <thead>
        <tr>
          <th>Products</th>
          <th>Quantity</th>
          <th>Bid Price</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {props.values.map((data, index) => (
          <tr key={index}>
            <td>{data.product}</td>
            <td>{data.quantity}</td>
            <td
              className={
                data.bid_type === "buy" ? "text-success" : "text-danger"
              }
            >
              {data.bid_value}
            </td>
            <td>
              <Button
                type="button"
                text={data.bid_type === "buy" ? "Buy" : "Sell"}
                className={
                  data.bid_type === "buy"
                    ? "btn-outline-success"
                    : "btn-outline-danger"
                }
              />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

