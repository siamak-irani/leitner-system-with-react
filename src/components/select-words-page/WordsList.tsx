import React, { useState } from "react";

import classes from "./WordsList.module.css";
import Wrapper from "../../ui/Wrapper";
import WordIndexForm from "./WordIndexForm";
import { PaginatedWordsData } from "../../lib/type";
import { InfiniteData } from "react-query";

type WordsListProps = {
  infiniteWordsData: InfiniteData<PaginatedWordsData> | undefined | undefined;
};

const WordsList = ({ infiniteWordsData }: WordsListProps) => {
  const [inputVal, setInputVal] = useState("-1");

  const wordsList = infiniteWordsData?.pages.flatMap((page) => page.words);

  // const inputChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   setInputVal(event.target.value);
  // };

  const formSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <div className={`${classes["WordsList"]}`}>
      <WordIndexForm formSubmitHandler={formSubmitHandler} />

      <Wrapper>
        <div className={`${classes["words"]}`}>
          <ul>
            <ol>
              {wordsList?.map((word, index) => {
                return <div key={index}>{word.spelling}</div>;
              })}
              <label htmlFor="test">Hello</label>
              <input type="radio" name="test" value="0" />
            </ol>
          </ul>
        </div>
      </Wrapper>

      {/* 
      <input type="radio" name="test" value="0" onChange={inputChangeHandler} />
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
      </button>
       */}
    </div>
  );
};

export default WordsList;
