import React from "react";

import classes from "./ShowNavBtn.module.css";

const ShowNavBtn = () => {
  return (
    <label className={`${classes["burger"]}`} htmlFor="main-nav--burger">
      <input type="checkbox" id="main-nav--burger" />
      <span></span>
      <span></span>
      <span></span>
    </label>
  );
};

export default ShowNavBtn;
