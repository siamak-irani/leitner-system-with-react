import React from "react";

import classes from "./BoxContainer.module.css";
import CellElement from "./CellElement";
import { CellNumber, CellsCounts } from "../../lib/type";

type BoxContainerProps = {
  cells: CellsCounts;
  activeCell: CellNumber;
  onWordReview: () => void;
};

const BoxContainer = ({
  cells,
  activeCell,
  onWordReview,
}: BoxContainerProps) => {
  const { c1, c2, c3, c4, c5 } = cells;

  return (
    <div className={`${classes["BoxContainer"]}`}>
      <div className={`${classes["cells-container"]}`}>
        <CellElement onWordReview={onWordReview} isActive={activeCell === 1} cellCount={c1} />
        <CellElement onWordReview={onWordReview} isActive={activeCell === 2} cellCount={c2} />
        <CellElement onWordReview={onWordReview} isActive={activeCell === 3} cellCount={c3} />
        <CellElement onWordReview={onWordReview} isActive={activeCell === 4} cellCount={c4} />
        <CellElement onWordReview={onWordReview} isActive={activeCell === 5} cellCount={c5} />
      </div>
    </div>
  );
};

export default BoxContainer;
