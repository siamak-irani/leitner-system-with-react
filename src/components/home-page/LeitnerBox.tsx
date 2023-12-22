import React from "react";
import { cells } from "../../utils/default-values";
import classes from "./LeitnerBox.module.css";
import CellElement from "./CellElement";

const { cell1, cell2, cell3, cell4, cell5 } = cells;

const LeitnerBox = () => {
  return (
    <div className={`${classes["LeitnerBox"]}`}>
      <div className={`${classes["cells-container"]}`}>
        <CellElement cell={cell1} />
        <CellElement cell={cell2} />
        <CellElement cell={cell3} />
        <CellElement cell={cell4} />
        <CellElement cell={cell5} />
      </div>
    </div>
  );
};

export default LeitnerBox;
