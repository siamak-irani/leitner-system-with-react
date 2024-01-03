import React from "react";

import classes from "./WordInfo.module.css";
import Wrapper from "../../../ui/Wrapper";
import AnswerForm from "./AnswerForm";
import { useProgressQuery } from "../../../hooks/use-progress-qurey";
import { useWordsQuery } from "../../../hooks/use-words-query";
import { useLoading } from "../../../hooks/use-loading";
import { CellNumber, Progress, Word } from "../../../lib/type";
import { useGoogleTranslateQuery } from "../../../hooks/use-google-translate-query";

type WordInfoProps = {
  evaluationClass: "positive" | "negative" | null;
  isEvaluated: boolean;
  enWord: Word;
  activeCell: CellNumber;
};

const WordInfo = ({
  evaluationClass,
  isEvaluated,
  enWord,
  activeCell,
}: WordInfoProps) => {
  const isAddNewWordModal = activeCell === 0;

  const googleQuery = useGoogleTranslateQuery(enWord.spelling, {
    enabled: !!enWord,
  });

  const { elementLoadingRenderer } = useLoading([googleQuery]);
  if (elementLoadingRenderer) return elementLoadingRenderer.element;

  const word = googleQuery.data;
  const equivalent = enWord.spelling;

  console.log(word)

  return (
    <div
      className={`${classes["WordInfo"]} ${
        evaluationClass && classes[evaluationClass]
      }`}
    >
      <Wrapper className={`${classes["word-info"]}`}>
        <div className={`${classes["word"]}`}>{word}</div>
        <div className={`${classes["equivalent"]}`}>
          {isEvaluated && (
            <div className={`${classes["right-answer"]}`}>
              <div className={`${classes["caption"]}`}>معادل واژه</div>
              <div className={`${classes["text"]}`}>{equivalent}</div>
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
