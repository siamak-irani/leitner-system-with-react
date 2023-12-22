import React from "react";

import classes from "./MainNavigation.module.css";
import { NavLink } from "react-router-dom";

type MainNavigationProps = {
  style?: React.CSSProperties;
};

const MainNavigation = ({ style }: MainNavigationProps) => {
  return (
    <div style={style} className={`${classes["MainNavigation"]}`}>
      <nav>
        <NavLink to="/">خانه</NavLink>
      </nav>
    </div>
  );
};

export default MainNavigation;
