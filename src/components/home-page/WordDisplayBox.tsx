import React from "react";

import classes from "./WordDisplayBox.module.css";
import Modal from "../../ui/Modal";
import AnswerForm from "./AnswerForm";
import Wrapper from "../../ui/Wrapper";
import ManualConfirm from "./ManualConfirm";
import WordInfo from "./WordInfo";
import { ReactComponent as CloseIcon } from "../../files/icons/close_FILL0_wght400_GRAD0_opsz48.svg";

const WordDisplayBox = () => {
  return (
    <Modal className={`${classes["word-display-modal"]}`}>
      <div className={`${classes["word-display-container"]}`}>
        <div className={`${classes["close-icon"]}`}>
          <CloseIcon />
        </div>
        <div className={`${classes["header"]}`}>
          <h1>خانه ۱</h1>
          <p>معادل واژه زیر را حدس بزنید</p>
        </div>
        <div className={`${classes["evaluation"]}`}>
          <p>حدس شما درست بود!</p>
        </div>
        <WordInfo />
        <ManualConfirm />
      </div>
    </Modal>
  );
};

export default WordDisplayBox;
