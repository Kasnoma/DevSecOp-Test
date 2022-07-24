import * as React from "react";
import "./livemarket.css";

interface Price {
  name: string;
  price: number;
}

type Props = {
  values: Array<Price>;
};

export const DashboardLiveMarket: React.FC<Props> = ({ values }) => {
  return (
    <div className="dashboard__live__market">
      <span>Live Market</span>
      <ul>
        {values.map((value, index) => (
          <li key={index}>
            <span className="name">{value.name}</span>
            <span className="price">
              &#x20A6;{value.price.toLocaleString()}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

