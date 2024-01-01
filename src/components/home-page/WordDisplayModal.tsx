import React, { useState } from "react";

import classes from "./WordDisplayModal.module.css";
import Modal from "../../ui/Modal";
import AnswerForm from "./AnswerForm";
import Wrapper from "../../ui/Wrapper";
import ManualConfirm from "./ManualConfirm";
import WordInfo from "./WordInfo";
import { ReactComponent as CloseIcon } from "../../files/icons/close_FILL0_wght400_GRAD0_opsz48.svg";

type WordDisplayModalProps = {
  onCloseModal: () => void;
  activeCell: number;
};

const WordDisplayModal = ({
  onCloseModal,
  activeCell,
}: WordDisplayModalProps) => {
  const [answerIsTrue, setAnswerIsTrue] = useState(false);
  const [evaluated, setEvaluated] = useState(false);
  const isAddNewWordModal = activeCell === 0;
  const evaluationClass = isAddNewWordModal
    ? null
    : answerIsTrue
    ? "positive"
    : "negative";

  return (
    <Modal
      className={`${classes["word-display-modal"]}`}
      onClick={onCloseModal}
    >
      <div className={`${classes["word-display-container"]}`}>
        <div className={`${classes["close-icon"]}`}>
          <CloseIcon onClick={onCloseModal} />
        </div>
        <div className={`${classes["header"]}`}>
          {isAddNewWordModal ? <h1>افزودن لغت</h1> : <h1>خانه {activeCell}</h1>}
          {isAddNewWordModal ? (
            <p>واژه زیر را به خاطر بسپارید</p>
          ) : (
            <p>معادل واژه زیر را حدس بزنید</p>
          )}
        </div>
        {!isAddNewWordModal && evaluated && (
          <div
            className={`${classes["evaluation"]} ${
              evaluationClass ? classes[evaluationClass] : null
            }`}
          >
            <p>حدس شما درست بود!</p>
          </div>
        )}

        <WordInfo
          evaluationClass={evaluationClass}
          activeCell={activeCell}
          isEvaluated={evaluated}
        />
        {evaluated && <ManualConfirm isAddNewWordModal={isAddNewWordModal} />}
      </div>
    </Modal>
  );
};

export default WordDisplayModal;
