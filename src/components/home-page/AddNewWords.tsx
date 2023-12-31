import React from "react";
import { ReactComponent as AddIcon } from "../../files/icons/add_FILL0_wght400_GRAD0_opsz24.svg";

import classes from "./AddNewWords.module.css";
import Wrapper from "../../ui/Wrapper";

const AddNewWords = () => {
  return (
    <div className={`${classes["AddNewWords"]}`}>
      <Wrapper className={`${classes["add-word--wrapper"]}`}>
        <div className={`${classes["add-icon"]}`}>
          <AddIcon />
        </div>
        <div className={`${classes["add-text"]}`}>
          <p>لغت جدید اضافه کنید</p>
        </div>
      </Wrapper>
    </div>
  );
};

export default AddNewWords;
