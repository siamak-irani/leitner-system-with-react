import React from "react";

import classes from "./StartButtons.module.css";
import ScrollButton from "../buttons/ScrollButton";
import { ReactComponent as PlayIcon } from "../../files/icons/play_arrow_FILL0_wght400_GRAD0_opsz24.svg";
import { ReactComponent as AddIcon } from "../../files/icons/add_FILL0_wght400_GRAD0_opsz24.svg";

const StartButtons = () => {
  return (
    <div className={`${classes["StartButtons"]}`}>
      <ScrollButton text="لغات جدید اضافه کنید">
        <AddIcon />
      </ScrollButton>
      <ScrollButton text="آغاز دور جدید" iconAnimation={false}>
        <PlayIcon />
      </ScrollButton>
    </div>
  );
};

export default StartButtons;
