import React from "react";

import classes from "./WordIndexForm.module.css";
import Wrapper from "../../ui/Wrapper";
import useInput from "../../hooks/use-inputs";
import { wordsListInputValidator } from "../../utils/inputs-validators";
import WhiteButton from "../buttons/WhiteButton";
import persianNumsToEnglish from "../../utils/fa-nums-to-en";

type WordIndexFormProps = {
  onSubmitForm: (e: React.FormEvent<HTMLFormElement>) => void;
};

const WordIndexForm = ({ onSubmitForm }: WordIndexFormProps) => {
  const {
    value,
    isValid,
    hasError,
    errorMessage,
    valueChangeHandler,
    inputblurHandler,
    isTouched,
    reset,
  } = useInput({
    valueValidator: wordsListInputValidator,
    valueModifier: persianNumsToEnglish,
  });

  return (
    <div className={`${classes["WordIndexForm"]}`}>
      <Wrapper>
        <form
          onSubmit={onSubmitForm}
          className={`${classes["word-index-form"]}`}
        >
          {/* <label htmlFor="words-list--number-input">
            عدد لغتی را که میخواهید یادگیری لغات جدید از آن شروع شود وارد کنید
            یا اینکه مستقیم از فهرست زیر لغت مورد نظر را پیدا کنید:
          </label> */}
          <div className={`${classes["acitons-container"]}`}>
            <div className={`${classes["input-container"]}`}>
              <Wrapper>
                <input
                  value={value}
                  onChange={valueChangeHandler}
                  onBlur={inputblurHandler}
                  type="text"
                  name="words-list--number-input"
                  id="words-list--number-input"
                  autoComplete="off"
                  className={hasError ? `${classes["has-error"]}` : ""}
                />
              </Wrapper>
              <p className={`${classes["input-err-msg"]}`}>{errorMessage}</p>
            </div>
            <WhiteButton disabled={!isValid}>ثبت</WhiteButton>
          </div>
        </form>
      </Wrapper>
    </div>
  );
};

export default WordIndexForm;
