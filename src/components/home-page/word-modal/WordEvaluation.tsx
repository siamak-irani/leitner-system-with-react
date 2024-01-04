import React from "react";

import classes from "./WordEvaluation.module.css";
import { CellNumber } from "../../../lib/type";

type WordEvaluationProps = {
  answerIsTrue: boolean;
  isEvaluated: boolean;
};

const WordEvaluation = ({ isEvaluated, answerIsTrue }: WordEvaluationProps) => {
  return (
    <>
      <div className={`${classes["evaluation"]}`}>
        {isEvaluated &&
          (answerIsTrue ? <p>حدس شما درست بود!</p> : <p>اشتباه حدس زدید</p>)}
      </div>
    </>
  );
};

export default WordEvaluation;
