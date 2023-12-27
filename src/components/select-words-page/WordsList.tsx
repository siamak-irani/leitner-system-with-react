import React, { useState } from "react";

import classes from "./WordsList.module.css";
import Wrapper from "../../ui/Wrapper";
import WordIndexForm from "./WordIndexForm";
import { PaginatedWordsData } from "../../lib/type";
import { InfiniteData } from "react-query";
import Words from "./Words";
import { useInfiniteWordsList } from "../../hooks/use-infinte-words-data";

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
      <WordIndexForm formSubmitHandler={formSubmitHandler} />
      <Words />
    </div>
  );
};

export default WordsList;
