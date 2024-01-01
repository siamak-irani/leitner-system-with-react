import React from "react";

import classes from "./StartButtons.module.css";
import ScrollButton from "../buttons/ScrollButton";
import { ReactComponent as PlayIcon } from "../../files/icons/play_arrow_FILL0_wght400_GRAD0_opsz24.svg";
import { ReactComponent as AddIcon } from "../../files/icons/add_FILL0_wght400_GRAD0_opsz24.svg";

type StartButtonsProps = {
  isActive: boolean;
  onAddNewWord: () => void;
};

const StartButtons = ({ isActive, onAddNewWord }: StartButtonsProps) => {
  return (
    <div className={`${classes["StartButtons"]}`}>
      <ScrollButton
        onClick={onAddNewWord}
        text="لغات جدید اضافه کنید"
        disabled={!isActive}
      >
        <AddIcon />
      </ScrollButton>
      <ScrollButton
        text="آغاز دور جدید"
        iconAnimation={false}
        disabled={!isActive}
      >
        <PlayIcon />
      </ScrollButton>
    </div>
  );
};

export default StartButtons;
