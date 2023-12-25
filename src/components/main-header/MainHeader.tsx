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

  const backdropCloseHandler = () => {
    setNavIsOpen(false);
  };

  return (
    <div className={`${classes["MainHeader"]}`}>
      <ShowNavBtn navIsOpen={navIsOpen} onOpenNav={navBtnHandler} />
      <h1 className={`${classes["logo"]}`}>جعبه لایتنر</h1>
      <div className={`${classes["nav-container"]}`}>
        <MainNavigation
          className={navIsOpen ? "visiable" : undefined}
          onNavigate={backdropCloseHandler}
        />
        {navIsOpen && (
          <Backdrop
            className="main-nav--backdrop"
            onClick={backdropCloseHandler}
          />
        )}
      </div>
    </div>
  );
};

export default MainHeader;
