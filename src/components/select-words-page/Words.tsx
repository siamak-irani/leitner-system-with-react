import React from "react";

import classes from "./Words.module.css";
import Wrapper from "../../ui/Wrapper";
import { Word } from "../../lib/type";

type WordsProps = {
  wordsList: Word[] | undefined;
};

const Words = ({ wordsList }: WordsProps) => {
  return (
    <div className={`${classes["Words"]}`}>
      <Wrapper>
        <div className={`${classes["words"]}`}>
          <ol>
            {wordsList?.map((word, index) => {
              return (
                <li key={index}>
                  <label htmlFor={"words-list--word-" + index}>
                    {word.spelling}
                  </label>
                  <input
                    type="radio"
                    name="word-list--word"
                    value="0"
                    id={"words-list--word-" + index}
                  />
                </li>
              );
            })}
          </ol>
        </div>
      </Wrapper>
    </div>
  );
};

export default Words;
