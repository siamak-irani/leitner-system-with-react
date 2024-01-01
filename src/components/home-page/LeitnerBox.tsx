import React from "react";
import classes from "./LeitnerBox.module.css";
import CellElement from "./CellElement";
import { WordsCount } from "../../lib/type";
import BoxContainer from "./BoxContainer";
import WordDisplayBox from "./WordDisplayBox";
import ScrollButton from "../buttons/ScrollButton";
import { ReactComponent as PlayIcon } from "../../files/icons/play_arrow_FILL0_wght400_GRAD0_opsz24.svg";
import { ReactComponent as AddIcon } from "../../files/icons/add_FILL0_wght400_GRAD0_opsz24.svg";

type LeitnerBoxProps = {
  data: WordsCount;
};

const LeitnerBox = ({ data }: LeitnerBoxProps) => {
  const { cells } = data;

  return (
    <div className={`${classes["LeitnerBox"]}`}>
      <div className={`${classes["start-buttons"]}`}>
        <ScrollButton text="لغات جدید اضافه کنید">
          <AddIcon />
        </ScrollButton>
        <ScrollButton text="آغاز دور جدید" iconAnimation={false}>
          <PlayIcon />
        </ScrollButton>
      </div>
      <BoxContainer cells={cells} />
      {/* <WordDisplayBox /> */}
    </div>
  );
};

export default LeitnerBox;
