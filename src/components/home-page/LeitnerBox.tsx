import React from "react";
import classes from "./LeitnerBox.module.css";
import { WordsCount } from "../../lib/type";
import BoxContainer from "./BoxContainer";
import StartButtons from "./StartButtons";

type LeitnerBoxProps = {
  data: WordsCount;
};

const LeitnerBox = ({ data }: LeitnerBoxProps) => {
  const { cells } = data;

  return (
    <div className={`${classes["LeitnerBox"]}`}>
      <StartButtons />
      <BoxContainer cells={cells} />
      {/* <WordDisplayBox /> */}
    </div>
  );
};

export default LeitnerBox;
