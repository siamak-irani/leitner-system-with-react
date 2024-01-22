import React, { useState } from "react";

import classes from "./WordInfo.module.css";
import Wrapper from "../../../ui/Wrapper";
import AnswerForm from "./AnswerForm";
import { useProgressQuery } from "../../../hooks/use-progress-qurey";
import { useLoading } from "../../../hooks/use-loading";
import { CellNumber, Progress, Word } from "../../../lib/type";
import { useGoogleTranslateQuery } from "../../../hooks/use-google-translate-query";
import WordInfoRenderer from "./WordInfoRenderer";
import { evaluationFunc } from "../../../utils/evaluation-fucn";

type WordInfoProps = {
  isEvaluated: boolean;
  setIsEvaluated: (isEvaluated: boolean) => void;
  currentWord: Word;
  activeCell: CellNumber;
  setWordsAreMatched: (isTrue: boolean) => void;
};

const WordInfo = ({
  isEvaluated,
  currentWord,
  activeCell,
  setIsEvaluated,
  setWordsAreMatched,
}: WordInfoProps) => {
  const [userAnswerRenderer, setUserAnswerRenderer] =
    useState<JSX.Element | null>(null);

  const isAddNewWordModal = activeCell === 0;

  const googleQuery = useGoogleTranslateQuery(currentWord.spelling, {
    enabled: !!currentWord,
  });

  const { elementLoadingRenderer } = useLoading([googleQuery]);
  if (elementLoadingRenderer) return elementLoadingRenderer.element;

  const word = googleQuery.data;
  const equivalent = currentWord.spelling;

  const wordFromSubmitHandler = (
    e: React.FormEvent<HTMLFormElement>,
    userAnswer: string
  ) => {
    e.preventDefault();
    const { areEqual, EvaluatedAnswer } = evaluationFunc(
      equivalent,
      userAnswer
    );
    setUserAnswerRenderer(EvaluatedAnswer);
    setWordsAreMatched(areEqual);
    setIsEvaluated(true);
  };

  return (
    <div className={`${classes["WordInfo"]}`}>
      <WordInfoRenderer
        word={word}
        equivalent={equivalent}
        isEvaluated={isEvaluated}
        isAddNewWordModal={isAddNewWordModal}
        formSubmitHandler={wordFromSubmitHandler}
        userAnswerRenderer={userAnswerRenderer}
      />
    </div>
  );
};

export default WordInfo;
