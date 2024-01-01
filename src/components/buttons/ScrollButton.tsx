import React from "react";

import classes from "./ScrollButton.module.css";
import Wrapper from "../../ui/Wrapper";
import { CustomElementProps } from "../../lib/type";

interface ScrollButtonProps extends CustomElementProps<"button"> {
  text: string;
  iconAnimation?: boolean;
}

const ScrollButton = ({
  children,
  iconAnimation = true,
  text,
  ...rest
}: ScrollButtonProps) => {
  return (
    <button className={`${classes["ScrollButton"]}`} {...rest}>
      <Wrapper className={`${classes["sroll-btn--wrapper"]}`}>
        <div
          className={`${classes["icon"]} ${
            !iconAnimation ? classes["no-animation"] : null
          }`}
        >
          {children}
        </div>
        <div className={`${classes["text"]}`}>
          <p>{text}</p>
        </div>
      </Wrapper>
    </button>
  );
};

export default ScrollButton;
