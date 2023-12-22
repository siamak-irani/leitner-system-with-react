import React from "react";

import classes from "./MainHeader.module.css";
import MainNavigation from "./MainNavigation";
import ShowNavBtn from "./ShowNavBtn";

const MainHeader = () => {
  return (
    <div className={`${classes["MainHeader"]}`}>
      <ShowNavBtn />
      <h1 className={`${classes["logo"]}`}>جعبه لایتنر</h1>
      <MainNavigation />
    </div>
  );
};

export default MainHeader;
