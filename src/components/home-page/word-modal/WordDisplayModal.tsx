import React, { useState } from "react";

import classes from "./WordDisplayModal.module.css";
import Modal from "../../../ui/Modal";
import ManualConfirm from "./ManualConfirm";
import WordInfo from "./WordInfo";
import { ReactComponent as CloseIcon } from "../../../files/icons/close_FILL0_wght400_GRAD0_opsz48.svg";
import WordModalHeader from "./WordModalHeader";
import { CellNumber } from "../../../lib/type";
import WordEvaluation from "./WordEvaluation";
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
  const [wordsAreMatched, setWordsAreMatched] = useState(false);
  const [isEvaluated, setIsEvaluated] = useState(false);

  const reviewQuery = useReviewQuery({ enabled: !!activeCell });

  const { elementLoadingRenderer } = useLoading([reviewQuery]);

  const isAddNewWordModal = activeCell === 0;
  const evaluationClass =
    isAddNewWordModal || !isEvaluated
      ? null
      : wordsAreMatched
      ? "word-modal-p"
      : "word-modal-n";

  const current_word = reviewQuery.data?.[0];

  return (
    <Modal
      className={`${classes["word-display-modal"]}`}
      onClick={onCloseModal}
    >
      <div
        className={`${classes["word-display-container"]} ${evaluationClass}`}
      >
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
              isEvaluated={isEvaluated}
              wordsAreMatched={wordsAreMatched}
            />

            <WordInfo
              currentWord={current_word!}
              isEvaluated={isEvaluated}
              setIsEvaluated={setIsEvaluated}
              activeCell={activeCell}
              setWordsAreMatched={setWordsAreMatched}
            />

            <ManualConfirm
              activeCell={activeCell}
              currentWord={current_word!}
              isAddNewWordModal={isAddNewWordModal}
              isEvaluated={isEvaluated}
            />
          </>
        )}
      </div>
    </Modal>
  );
};

export default WordDisplayModal;
