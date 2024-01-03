import React, { useState } from "react";

import classes from "./WordDisplayModal.module.css";
import Modal from "../../../ui/Modal";
import AnswerForm from "./AnswerForm";
import Wrapper from "../../../ui/Wrapper";
import ManualConfirm from "./ManualConfirm";
import WordInfo from "./WordInfo";
import { ReactComponent as CloseIcon } from "../../../files/icons/close_FILL0_wght400_GRAD0_opsz48.svg";
import { useProgressQuery } from "../../../hooks/use-progress-qurey";
import WordModalHeader from "./WordModalHeader";
import { CellNumber } from "../../../lib/type";
import WordEvaluation from "./WordEvaluation";
import { useWordsQuery } from "../../../hooks/use-words-query";
import { useReviewQuery } from "../../../hooks/use-review-query";
import { useLoading } from "../../../hooks/use-loading";

type WordDisplayModalProps = {
  onCloseModal: () => void;
  activeCell: CellNumber;
};

const WordDisplayModal = ({
  onCloseModal,
  activeCell,
}: WordDisplayModalProps) => {
  const [answerIsTrue, setAnswerIsTrue] = useState(false);
  const [evaluated, setEvaluated] = useState(false);

  const reviewQuery = useReviewQuery({ enabled: !!activeCell });

  const { elementLoadingRenderer } = useLoading([reviewQuery]);

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
        {elementLoadingRenderer ? (
          <>
            <div>{elementLoadingRenderer.element}</div>
            <p
              style={{ direction: "rtl", marginTop: "1rem", fontSize: "14px" }}
            >
              {elementLoadingRenderer.isLoading && "در حال دریافت داده..."}
              {elementLoadingRenderer.isError && "دوباره تلاش کنید"}
            </p>
          </>
        ) : (
          <>
            <CloseIcon
              className={`${classes["close-icon"]}`}
              onClick={onCloseModal}
            />

            <WordModalHeader
              activeCell={activeCell}
              isAddNewWordModal={isAddNewWordModal}
            />

            <WordEvaluation
              isAddNewWordModal={isAddNewWordModal}
              evaluated={evaluated}
            />
            <WordInfo
              enWord={reviewQuery.data[0]}
              evaluationClass={evaluationClass}
              isEvaluated={evaluated}
              activeCell={activeCell}
            />

            <ManualConfirm
              isAddNewWordModal={isAddNewWordModal}
              evaluated={evaluated}
            />
          </>
        )}
      </div>
    </Modal>
  );
};

export default WordDisplayModal;
