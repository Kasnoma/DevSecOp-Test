import * as React from "react";
import { NavLink } from "react-router-dom";
import { Formik, Form } from "formik";
import { TextInput } from "../TextInput";
import "./search.css";

import { MdOutlineShowChart, MdOutlineAccessTime } from "react-icons/md";
import {
  AiOutlineEye,
  AiOutlineCheckCircle,
  AiOutlineCloseCircle,
} from "react-icons/ai";
import { FiBook } from "react-icons/fi";

export const DashboardSearch: React.FC = () => {
  return (
    <div className="dashboard__search">
      <Formik
        initialValues={{ search: "" }}
        onSubmit={(values) => console.log(values)}
      >
        <Form>
          <TextInput
            type="text"
            placeholder="Search..."
            label=""
            name="search"
            id="search"
          />
        </Form>
      </Formik>

      <ul>
        <NavLink to="/dashboard/market/product-view" className="search__link">
          <MdOutlineShowChart /> Product View
        </NavLink>
        <NavLink to="/dashboard/market/order-book" className="search__link">
          <FiBook /> Order Book
        </NavLink>
        <NavLink to="/dashboard/market/price-history" className="search__link">
          <MdOutlineAccessTime /> Price History
        </NavLink>
        <NavLink to="/dashboard/market/open-orders" className="search__link">
          <AiOutlineEye /> Open Orders
        </NavLink>
        <NavLink to="/dashboard/market/closed-trades" className="search__link">
          <AiOutlineCheckCircle /> Closed Trades
        </NavLink>
        <NavLink
          to="/dashboard/market/cancelled-trades"
          className="search__link"
        >
          <AiOutlineCloseCircle /> Cancelled Trades
        </NavLink>
      </ul>
    </div>
  );
};

