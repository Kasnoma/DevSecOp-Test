import * as React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";

interface Balance {
  name: string;
  value: number;
}

type Prop = {
  balances: Array<Balance>;
};

export const DashboardNavbar: React.FC<Prop> = ({ balances }) => {
  const [dark, setDark] = React.useState(false);
  return (
    <nav className="dashboard__navbar">
      <div className="logo__container">
        <Link to="/dashboard/market/order-book">
          <img src={logo} alt="logo" />
        </Link>
        <label>
          <input type="checkbox" name="theme" />
          {dark ? "Dark" : "Light"}
        </label>
      </div>
      <div className="demo">
        <ul className="balances__container">
          {balances.map((balance, index) => (
            <li key={index}>
              <span className="name">{balance.name}</span>
              <span className="value">{balance.value}</span>
            </li>
          ))}
        </ul>
        <select name="demo" id="demo" className="demo">
          <option value="demo">Demo</option>
        </select>
      </div>
    </nav>
  );
};

