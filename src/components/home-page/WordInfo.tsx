import React from "react";

import classes from "./WordInfo.module.css";
import Wrapper from "../../ui/Wrapper";
import AnswerForm from "./AnswerForm";

type WordInfoProps = {
  evaluationClass: "positive" | "negative" | null;
  activeCell: number;
  isEvaluated: boolean;
};

const WordInfo = ({
  evaluationClass,
  activeCell,
  isEvaluated,
}: WordInfoProps) => {
  const isAddNewWordModal = activeCell === 0;

  return (
    <div
      className={`${classes["WordInfo"]} ${
        evaluationClass && classes[evaluationClass]
      }`}
    >
      <Wrapper className={`${classes["word-info"]}`}>
        <div className={`${classes["word"]}`}>سلام</div>
        <div className={`${classes["equivalent"]}`}>
          {isEvaluated && (
            <div className={`${classes["right-answer"]}`}>
              <div className={`${classes["caption"]}`}>معادل واژه</div>
              <div className={`${classes["text"]}`}>hello</div>
            </div>
          )}

          {!isAddNewWordModal && isEvaluated && (
            <div className={`${classes["user-answer"]}`}>
              <div className={`${classes["caption"]}`}>پاسخ شما</div>
              <div className={`${classes["text"]}`}>hello</div>
            </div>
          )}
          {isEvaluated && (
            <div className={`${classes["phonetic"]}`}>
              <div className={`${classes["caption"]}`}>فونتیک</div>
              <div className={`${classes["text"]}`}>/həˈlō/</div>
            </div>
          )}
        </div>
        {!isEvaluated && <AnswerForm />}
      </Wrapper>
    </div>
  );
};

export default WordInfo;
