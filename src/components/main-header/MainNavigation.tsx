import React from "react";

import classes from "./MainNavigation.module.css";
import { NavLink } from "react-router-dom";

const MainNavigation = () => {
  return (
    <div className={`${classes["MainNavigation"]}`}>
      <nav>
        <NavLink to="/">خانه</NavLink>
      </nav>
    </div>
  );
};

export default MainNavigation;
