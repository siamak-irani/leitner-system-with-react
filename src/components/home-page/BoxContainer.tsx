import React from "react";

import classes from "./BoxContainer.module.css";
import CellElement from "./CellElement";
import { CellsCounts } from "../../lib/type";

type BoxContainerProps = {
  cells: CellsCounts;
};

const BoxContainer = ({ cells }: BoxContainerProps) => {
  const { c1, c2, c3, c4, c5 } = cells;

  return (
    <div className={`${classes["BoxContainer"]}`}>
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

export default BoxContainer;
