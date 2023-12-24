import React from "react";

import classes from "./RouterLoading.module.css";

const RouterLoading = () => {
  return (
    <div className={`${classes["RouterLoading"]}`}>
      <div className={`${classes["loadre"]}`}>
        <span className={`${classes["letter"]}`}>ب</span>
        <span className={`${classes["letter"]}`}>ا</span>
        <span className={`${classes["letter"]}`}>ر</span>
        <span className={`${classes["letter"]}`}>گ</span>
        <span className={`${classes["letter"]}`}>ذ</span>
        <span className={`${classes["letter"]}`}>ا</span>
        <span className={`${classes["letter"]}`}>ر</span>
        <span className={`${classes["letter"]}`}>ی</span>
        <span className={`${classes["letter"]}`}>.</span>
        <span className={`${classes["letter"]}`}>.</span>
        <span className={`${classes["letter"]}`}>.</span>

        {/* 
        <span class="l">L</span>
        <span class="o">o</span>
        <span class="a">a</span>
        <span class="d">d</span>
        <span class="i">i</span>
        <span class="n">n</span>
        <span class="g">g</span>
        <span class="d1">.</span>
        <span class="d2">.</span> */}
      </div>
    </div>
  );
};

export default RouterLoading;
