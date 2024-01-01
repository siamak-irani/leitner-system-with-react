import React from "react";

import classes from "./ManualConfirm.module.css";
import CustomBtn from "../CustomBtn";

type ManualConfirmProps = {
  isAddNewWordModal: boolean;
};

const ManualConfirm = ({ isAddNewWordModal }: ManualConfirmProps) => {
  return (
    <div className={`${classes["ManualConfirm"]}`}>
      {isAddNewWordModal ? (
        <div className={`${classes["new-words"]} ${classes["btn-container"]}`}>
          <CustomBtn
            tooltipClassName={classes["manual-confirm-tooltip"]}
            tooltipText="واژه را به جعبه اضافه کنید"
          >
            افزودن
          </CustomBtn>
          <CustomBtn
            tooltipClassName={classes["manual-confirm-tooltip"]}
            tooltipText="اگر فکر میکنید واژه آسان است به کلی از آن عبور کنید"
          >
            پرش
          </CustomBtn>
        </div>
      ) : (
        <div className={`${classes["cells-btn"]} ${classes["btn-container"]}`}>
          <CustomBtn tooltipText="" readyClass="positive">
            بلدم
          </CustomBtn>
          <CustomBtn tooltipText="" readyClass="negative">
            بلد نیستم
          </CustomBtn>
        </div>
      )}
    </div>
  );
};

export default ManualConfirm;
