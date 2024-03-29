import React, { useRef } from "react";

import classes from "./Words.module.css";
import Wrapper from "../../ui/Wrapper";
import { Word } from "../../lib/type";
import { useInfiniteWordsList } from "../../hooks/use-infinte-words-data";
import { ReactComponent as LoadingSVG } from "../../files/icons/refresh_FILL0_wght400_GRAD0_opsz24.svg";
import LoadingSpinner from "../../ui/LoadingSpinner";

type WordsProps = {
  onSelectWord: (
    e: React.MouseEvent<HTMLInputElement, MouseEvent>,
    inputValue: number
  ) => void;
};

const Words = ({ onSelectWord }: WordsProps) => {
  const OLRef = useRef<HTMLOListElement>(null);
  const parrentRef = useRef<HTMLDivElement>(null);

  const wordsQuery = useInfiniteWordsList(parrentRef, OLRef);

  const wordsList = wordsQuery?.data?.pages.flatMap((page) => page.words);

  return (
    <div className={`${classes["Words"]}`}>
      <Wrapper>
        <div className={`${classes["words"]}`} ref={parrentRef}>
          <ol ref={OLRef}>
            {wordsList?.map((word, index) => {
              return (
                <li key={index}>
                  <label htmlFor={"words-list--word-" + index}>
                    {word.spelling}
                  </label>
                  <input
                    type="radio"
                    onClick={(e) => {
                      onSelectWord(e, index);
                    }}
                    name="word-list--word"
                    value={index}
                    id={"words-list--word-" + index}
                  />
                </li>
              );
            })}
          </ol>
          {wordsQuery.isFetchingNextPage && <LoadingSpinner />}
        </div>
      </Wrapper>
    </div>
  );
};

export default Words;
