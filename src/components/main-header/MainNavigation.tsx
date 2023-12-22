import React from "react";

import classes from "./MainNavigation.module.css";
import { NavLink } from "react-router-dom";
import Backdrop from "../../ui/Backdrop";

type MainNavigationProps = {
  className?: string;
};

const MainNavigation = ({ className }: MainNavigationProps) => {
  return (
    <div
      className={`${classes["MainNavigation"]} ${
        className && classes[className]
      }`}
    >
      <nav>
        <NavLink
          to="/"
          className={({ isActive }) => {
            return isActive ? classes.active : undefined;
          }}
        >
          خانه
        </NavLink>
      </nav>
    </div>
  );
};

export default MainNavigation;
