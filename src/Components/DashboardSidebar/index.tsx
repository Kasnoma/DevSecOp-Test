import * as React from "react";
import { NavLink } from "react-router-dom";
import { IoGridOutline } from "react-icons/io5";
import { FiUsers, FiBriefcase } from "react-icons/fi";
import { AiOutlineLineChart, AiOutlineFile } from "react-icons/ai";
import { HiOutlineCog } from "react-icons/hi";
import "./sidebar.css";

export const DashboardSideBar: React.FC = () => {
  return (
    <aside className="dashboard__sidebar">
      <ul>
        <li>
          <NavLink to="/dashboard/overview">
            <IoGridOutline className="sidebar__icon" />
            <span>Overview</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/dashboard/market/order-book">
            <AiOutlineLineChart />
            <span>Market</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/dashboard/portfolio">
            <FiBriefcase className="sidebar__icon" />
            <span>Portfolio</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/dashboard/community">
            <FiUsers className="sidebar__icon" />
            <span>Community</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/dashboard/reports">
            <AiOutlineFile className="sidebar__icon" />
            <span>Reports</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/dashboard/settings">
            <HiOutlineCog className="sidebar__icon" />
            <span>Settings</span>
          </NavLink>
        </li>
      </ul>
    </aside>
  );
};

