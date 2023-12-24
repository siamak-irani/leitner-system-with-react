import React, { useState } from "react";

import classes from "./WordsList.module.css";
import Wrapper from "../../ui/Wrapper";

const WordsList = () => {
  const [inputVal, setInputVal] = useState("-1");

  // const inputChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   setInputVal(event.target.value);
  // };

  const formSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <div className={`${classes["WordsList"]}`}>
      <Wrapper>
        <div className={`${classes["word-index-inputs"]}`}>
          <form
            onSubmit={formSubmitHandler}
            className={`${classes["word-index-form"]}`}
          >
            <label htmlFor="words-list--number-input">
              عدد لغتی را که میخواهید یادگیری لغات جدید از آن شروع شود وارد کنید
              یا اینکه مستقیم از فهرست زیر لغت مورد نظر را پیدا کنید:
            </label>
            <div className={`${classes["inputs-container"]}`}>
              <Wrapper>
                <input
                  type="text"
                  name="words-list--number-input"
                  id="words-list--number-input"
                />
              </Wrapper>
              <button>ثبت</button>
            </div>
          </form>
        </div>
      </Wrapper>

      {/* <input type="radio" name="test" value="0" onChange={inputChangeHandler} />
      0
      <input type="radio" name="test" value="1" onChange={inputChangeHandler} />
      1
      <input type="radio" name="test" value="2" onChange={inputChangeHandler} />
      2
      <input type="radio" name="test" value="3" onChange={inputChangeHandler} />
      3
      <button
        onClick={() => {
          setInputVal("3");
        }}
      >
        3
      </button> */}
    </div>
  );
};

export default WordsList;
