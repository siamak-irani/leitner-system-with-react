import React, { useState } from "react";

import classes from "./MainHeader.module.css";
import MainNavigation from "./MainNavigation";
import ShowNavBtn from "./ShowNavBtn";

const MainHeader = () => {
  const [navIsOpen, setNavIsOpen] = useState(false);

  function navBtnHandler(checked: boolean) {
    setNavIsOpen(checked);
  }

  return (
    <div className={`${classes["MainHeader"]}`}>
      <ShowNavBtn onOpenNav={navBtnHandler} />
      <h1 className={`${classes["logo"]}`}>جعبه لایتنر</h1>
      <MainNavigation style={{right: navIsOpen ? "10px": "-200px"}} />
    </div>
  );
};

export default MainHeader;
