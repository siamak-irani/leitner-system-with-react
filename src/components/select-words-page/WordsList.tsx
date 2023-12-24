import React, { useState } from "react";

import classes from "./WordsList.module.css";
import Wrapper from "../../ui/Wrapper";
import WordIndexForm from "./WordIndexForm";

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
       <WordIndexForm formSubmitHandler={formSubmitHandler} />
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
