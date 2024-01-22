import React from "react";

import classes from "./WordEvaluation.module.css";
import { CellNumber } from "../../../lib/type";

type WordEvaluationProps = {
  wordsAreMatched: boolean;
  isEvaluated: boolean;
};

const WordEvaluation = ({
  isEvaluated,
  wordsAreMatched,
}: WordEvaluationProps) => {
  return (
    <>
      <div className={`${classes["evaluation"]}`}>
        {isEvaluated &&
          (wordsAreMatched ? <p>حدس شما درست بود!</p> : <p>اشتباه حدس زدید</p>)}
      </div>
    </>
  );
};

export default WordEvaluation;
