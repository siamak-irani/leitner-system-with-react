import React from "react";
import classes from "./LeitnerBox.module.css";
import CellElement from "./CellElement";
import { WordsCount } from "../../lib/type";

type LeitnerBoxProps = {
  data: WordsCount;
};

const LeitnerBox = ({ data }: LeitnerBoxProps) => {
  const { cells } = data;
  const { c1, c2, c3, c4, c5 } = cells;

  return (
    <div className={`${classes["LeitnerBox"]}`}>
      <div className={`${classes["cells-container"]}`}>
        <CellElement cellCount={c1} />
        <CellElement cellCount={c2} />
        <CellElement cellCount={c3} />
        <CellElement cellCount={c4} />
        <CellElement cellCount={c5} />
      </div>
    </div>
  );
};

export default LeitnerBox;
