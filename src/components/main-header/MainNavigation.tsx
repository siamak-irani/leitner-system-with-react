import React from "react";

import classes from "./MainNavigation.module.css";
import { NavLink } from "react-router-dom";
import Backdrop from "../../ui/Backdrop";

type MainNavigationProps = {
  className?: string;
  onNavigate?: () => void;
};

const MainNavigation = ({ className, onNavigate }: MainNavigationProps) => {
  return (
    <div
      className={`${classes["MainNavigation"]} ${
        className && classes[className]
      }`}
    >
      <nav>
        <ul>
          <li>
            <NavLink
              to="/"
              onClick={onNavigate}
              className={({ isActive }) => {
                return isActive ? classes.active : undefined;
              }}
            >
              خانه
            </NavLink>
          </li>
          <li>
            <NavLink to="select-words" onClick={onNavigate}>
              Select word index
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default MainNavigation;
