import React from "react";

import classes from "./ConfirmWord.module.css";
import Modal from "../../ui/Modal";
import CustomBtn from "../CustomBtn";
import { ReactComponent as CloseIcon } from "../../files/icons/close_FILL0_wght400_GRAD0_opsz48.svg";

type ConfirmWordProps = {
  isVisiable: boolean;
};

const ConfirmWord = ({ isVisiable }: ConfirmWordProps) => {
  if (!isVisiable) return null;

  return (
    <Modal className={`${classes["confirm-word-modal"]}`}>
      <CloseIcon />
      <div className={`${classes["confirm-word"]}`}>
        <h1>آیا لغت زیر را تایید میکنید؟</h1>
        <p><span>1. </span>Hello</p>
        <div className={`${classes["buttons"]}`}>
          <CustomBtn className={`${classes["confirm"]}`}>بله</CustomBtn>
          <CustomBtn className={`${classes["cancel"]}`}>انصراف</CustomBtn>
        </div>
      </div>
    </Modal>
  );
};

export default ConfirmWord;
