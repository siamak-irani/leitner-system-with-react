import React from "react";

import classes from "./ScrollButton.module.css";
import Wrapper from "../../ui/Wrapper";
import { CustomElementProps } from "../../lib/type";

interface ScrollButtonProps extends CustomElementProps<"button"> {
  text: string;
}

const ScrollButton = ({ children, text, ...rest }: ScrollButtonProps) => {
  return (
    <button className={`${classes["ScrollButton"]}`}>
      <Wrapper className={`${classes["sroll-btn--wrapper"]}`}>
        <div className={`${classes["icon"]}`}>{children}</div>
        <div className={`${classes["text"]}`}>
          <p>{text}</p>
        </div>
      </Wrapper>
    </button>
  );
};

export default ScrollButton;
