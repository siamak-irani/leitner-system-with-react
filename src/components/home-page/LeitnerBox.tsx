import React from "react";
import classes from "./LeitnerBox.module.css";
import CellElement from "./CellElement";
import { WordsCount } from "../../lib/type";
import BoxContainer from "./BoxContainer";
import AddNewWords from "./AddNewWords";

type LeitnerBoxProps = {
  data: WordsCount;
};

const LeitnerBox = ({ data }: LeitnerBoxProps) => {
  const { cells } = data;

  return (
    <div className={`${classes["LeitnerBox"]}`}>
      <AddNewWords />
      <BoxContainer cells={cells} />
    </div>
  );
};

export default LeitnerBox;
