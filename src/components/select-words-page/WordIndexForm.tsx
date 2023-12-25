import React from "react";

import classes from "./WordIndexForm.module.css";
import Wrapper from "../../ui/Wrapper";
import useInput from "../../hooks/use-inputs";
import { wordsListInputValidator } from "../../utils/inputs-validators";

type WordIndexFormProps = {
  formSubmitHandler: (e: React.FormEvent<HTMLFormElement>) => void;
};

const WordIndexForm = ({ formSubmitHandler }: WordIndexFormProps) => {
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
  });

  return (
    <div className={`${classes["WordIndexForm"]}`}>
      <form
        onSubmit={formSubmitHandler}
        className={`${classes["word-index-form"]}`}
      >
        <label htmlFor="words-list--number-input">
          عدد لغتی را که میخواهید یادگیری لغات جدید از آن شروع شود وارد کنید یا
          اینکه مستقیم از فهرست زیر لغت مورد نظر را پیدا کنید:
        </label>
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
          <button disabled={!isValid}>ثبت</button>
        </div>
      </form>
    </div>
  );
};

export default WordIndexForm;