import * as React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import "./navbar.css";

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
        <div className="toggle">
          <input
            type="checkbox"
            name="theme"
            id="theme"
            onChange={(s) => setDark(!s)}
          />
          <label htmlFor="theme"></label>
        </div>
      </div>
      <div className="demo__container">
        <ul className="balances__container">
          {balances.map((balance, index) => (
            <li key={index} className="balances__item">
              <span className="muted">{balance.name}</span>
              <span className="value">
                &#x20A6;{balance.value.toLocaleString()}
              </span>
            </li>
          ))}
        </ul>
        <div className="select__container">
          <select name="demoselect" id="demoselect" className="demo__select">
            <option value="demo">Demo</option>
            <option value="live">Live</option>
          </select>
        </div>
      </div>
    </nav>
  );
};

