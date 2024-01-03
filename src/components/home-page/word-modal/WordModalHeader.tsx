import React from "react";

import classes from "./WordModalHeader.module.css";
import { CellNumber } from "../../../lib/type";

type WordModalHeaderProps = {
  activeCell: CellNumber;
  isAddNewWordModal: boolean;
};

const WordModalHeader = ({
  activeCell,
  isAddNewWordModal,
}: WordModalHeaderProps) => {
  return (
    <div className={`${classes["header"]}`}>
      {isAddNewWordModal ? <h1>افزودن لغت</h1> : <h1>خانه {activeCell}</h1>}
      {isAddNewWordModal ? (
        <p>واژه زیر را به خاطر بسپارید</p>
      ) : (
        <p>معادل واژه زیر را حدس بزنید</p>
      )}
    </div>
  );
};

export default WordModalHeader;
