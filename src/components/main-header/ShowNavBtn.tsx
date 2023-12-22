import React from "react";

import classes from "./ShowNavBtn.module.css";

type ShowNavBtnProps = {
  onOpenNav: (checked: boolean) => void;
  navIsOpen: boolean;
  className?: string;
};

const ShowNavBtn = ({ onOpenNav, navIsOpen, className }: ShowNavBtnProps) => {
  function inputToggleHandler(e: React.ChangeEvent<HTMLInputElement>) {
    onOpenNav(e.target.checked);
  }

  return (
    <label
      className={`${classes["burger"]} ${className && classes[className]}`}
      htmlFor="main-nav--burger"
    >
      <input
        type="checkbox"
        id="main-nav--burger"
        onChange={inputToggleHandler}
        checked={navIsOpen}
      />
      <span></span>
      <span></span>
      <span></span>
    </label>
  );
};

export default ShowNavBtn;
