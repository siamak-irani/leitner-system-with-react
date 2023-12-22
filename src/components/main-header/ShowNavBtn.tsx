import React from "react";

import classes from "./ShowNavBtn.module.css";

type ShowNavBtnProps = {
  onOpenNav: (checked: boolean) => void;
};

const ShowNavBtn = ({ onOpenNav }: ShowNavBtnProps) => {
  function inputToggleHandler(e: React.ChangeEvent<HTMLInputElement>) {
    onOpenNav(e.target.checked);
  }

  return (
    <label className={`${classes["burger"]}`} htmlFor="main-nav--burger">
      <input
        type="checkbox"
        id="main-nav--burger"
        onChange={inputToggleHandler}
      />
      <span></span>
      <span></span>
      <span></span>
    </label>
  );
};

export default ShowNavBtn;
