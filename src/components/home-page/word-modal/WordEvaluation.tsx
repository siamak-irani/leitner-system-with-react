import React from "react";

import classes from "./WordEvaluation.module.css";
import { CellNumber } from "../../../lib/type";

type WordEvaluationProps = {
  isAddNewWordModal: boolean;
  evaluated: boolean;
};

const WordEvaluation = ({
  isAddNewWordModal,
  evaluated,
}: WordEvaluationProps) => {
  return (
    <>
      {!isAddNewWordModal && evaluated && (
        <div className={`${classes["evaluation"]}`}>
          <p>حدس شما درست بود!</p>
        </div>
      )}
    </>
  );
};

export default WordEvaluation;
