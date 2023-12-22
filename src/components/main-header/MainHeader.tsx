import React, { useState } from "react";

import classes from "./MainHeader.module.css";
import MainNavigation from "./MainNavigation";
import ShowNavBtn from "./ShowNavBtn";
import Backdrop from "../../ui/Backdrop";

const MainHeader = () => {
  const [navIsOpen, setNavIsOpen] = useState(false);

  function navBtnHandler(checked: boolean) {
    setNavIsOpen(checked);
  }

  const backdropClickHandler = () => {
    setNavIsOpen(false);
  };

  return (
    <div className={`${classes["MainHeader"]}`}>
      <ShowNavBtn navIsOpen={navIsOpen} onOpenNav={navBtnHandler} />
      <h1 className={`${classes["logo"]}`}>جعبه لایتنر</h1>
      <div className={`${classes["nav-container"]}`}>
        <MainNavigation className={navIsOpen ? "visiable" : undefined} />
        {navIsOpen && (
          <Backdrop
            className="main-nav--backdrop"
            onClick={backdropClickHandler}
          />
        )}
      </div>
    </div>
  );
};

export default MainHeader;
