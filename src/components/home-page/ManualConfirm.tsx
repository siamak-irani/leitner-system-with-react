import React from "react";

import classes from "./ManualConfirm.module.css";
import CustomBtn from "../CustomBtn";

const ManualConfirm = () => {
  return (
    <div className={`${classes["ManualConfirm"]}`}>
      <div className={`${classes["cells-btn"]} ${classes["btn-container"]}`}>
        <CustomBtn readyClass="positive">بلدم</CustomBtn>
        <CustomBtn readyClass="negative">بلد نیستم</CustomBtn>
      </div>
      {/* <div className={`${classes["new-words"]} ${classes["btn-container"]}`}>
        <CustomBtn>اضافه کردن</CustomBtn>
        <CustomBtn>پرش</CustomBtn>
      </div> */}
    </div>
  );
};

export default ManualConfirm;
