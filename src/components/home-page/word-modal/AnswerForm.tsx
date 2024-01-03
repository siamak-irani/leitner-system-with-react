import React from "react";

import classes from "./AnswerForm.module.css";
import CustomBtn from "../../CustomBtn";

const AnswerForm = () => {
  return (
    <form className={`${classes["answer-form"]}`}>
      <input type="text" placeholder="پاسخ خود را بنویسید" />
      <CustomBtn
        className={classes["btn"]}
      >
        دیدن نتیجه
      </CustomBtn>
    </form>
  );
};

export default AnswerForm;
