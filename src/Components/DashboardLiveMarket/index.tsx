import * as React from "react";

interface Price {
  name: string;
  price: number;
}

type Props = {
  values: Array<Price>;
};

export const DashboardLiveMarket: React.FC<Props> = ({ values }) => {
  return (
    <ul className="dashboard-live-market">
      <li className="title">Live Market</li>

      {values.map((value, index) => (
        <li key={index}>
          <span className="name">{value.name}</span>
          <span className="price">{value.price}</span>
        </li>
      ))}
    </ul>
  );
};
