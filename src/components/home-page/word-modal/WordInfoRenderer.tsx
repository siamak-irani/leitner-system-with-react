import React from "react";

import classes from "./WordInfoRenderer.module.css";
import Wrapper from "../../../ui/Wrapper";
import AnswerForm from "./AnswerForm";
import { toCapitalCase } from "../../../utils/to-capital-case";

type WordInfoRendererProps = {
  word: string;
  equivalent: string;
  isEvaluated: boolean;
  isAddNewWordModal: boolean;
  formSubmitHandler: (
    e: React.FormEvent<HTMLFormElement>,
    inputValue: string
  ) => void;
  userAnswerRenderer: JSX.Element | null;
};

const WordInfoRenderer = ({
  word,
  equivalent,
  isEvaluated,
  isAddNewWordModal,
  formSubmitHandler,
  userAnswerRenderer,
}: WordInfoRendererProps) => {
  return (
    <div className={`${classes["WordInfoRenderer"]}`}>
      <Wrapper className={`${classes["word-info"]}`}>
        <div className={`${classes["word"]}`}>{word}</div>
        <div className={`${classes["equivalent"]}`}>
          {isEvaluated && (
            <div className={`${classes["right-answer"]}`}>
              <div className={`${classes["caption"]}`}>معادل واژه</div>
              <div className={`${classes["text"]}`}>
                {toCapitalCase(equivalent)}
              </div>
            </div>
          )}

          {isEvaluated && (
            <div className={`${classes["phonetic"]}`}>
              <div className={`${classes["caption"]}`}>فونتیک</div>
              <div className={`${classes["text"]}`}>/həˈlō/</div>
            </div>
          )}

          {!isAddNewWordModal && isEvaluated && (
            <div className={`${classes["user-answer"]}`}>
              <div className={`${classes["caption"]}`}>پاسخ شما</div>
              <div className={`${classes["text"]}`}>{userAnswerRenderer}</div>
            </div>
          )}
        </div>
        {!isEvaluated && <AnswerForm onSubmitForm={formSubmitHandler} />}
      </Wrapper>
    </div>
  );
};

export default WordInfoRenderer;
