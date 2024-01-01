import React from "react";

import classes from "./WordInfo.module.css";
import Wrapper from "../../ui/Wrapper";
import AnswerForm from "./AnswerForm";

const WordInfo = () => {
  return (
    <div className={`${classes["WordInfo"]}`}>
      <Wrapper className={`${classes["word-info"]}`}>
        <div className={`${classes["word"]}`}>سلام</div>
        <div className={`${classes["equivalent"]}`}>
          <div className={`${classes["right-answer"]}`}>
            <div className={`${classes["caption"]}`}>پاسخ اصلی</div>
            <div className={`${classes["text"]}`}>hello</div>
          </div>
          <div className={`${classes["user-answer"]}`}>
            <div className={`${classes["caption"]}`}>پاسخ شما</div>
            <div className={`${classes["text"]}`}>hello</div>
          </div>
          <div className={`${classes["phonetic"]}`}>
            <div className={`${classes["caption"]}`}>فونتیک</div>
            <div className={`${classes["text"]}`}>/həˈlō/</div>
          </div>
        </div>
        {/* <AnswerForm /> */}
      </Wrapper>
    </div>
  );
};

export default WordInfo;
