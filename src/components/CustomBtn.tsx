import React, { useEffect, useRef, useState } from "react";

import classes from "./CustomBtn.module.css";
import { CustomElementProps } from "../lib/type";

interface CustomBtnProps extends CustomElementProps<"button"> {
  tooltipText?: string | null;
  tooltipClassName?: string | null;
}

const CustomBtn = ({
  children,
  className,
  tooltipClassName,
  tooltipText,
  ...rest
}: CustomBtnProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [tooltipIsOpen, setTooltipIsOpen] = useState(false);
  let timeoutId: NodeJS.Timeout;

  const mouseOverHandler = () => {
    timeoutId = setTimeout(() => {
      setTooltipIsOpen(true);
    }, 2 * 1000);
  };

  const mouseOutHandler = () => {
    setTooltipIsOpen(false);
  };

  useEffect(() => {
    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <div
      className={`${classes["CustomBtn"]}`}
      ref={containerRef}
      onMouseOver={mouseOverHandler}
      onMouseOut={mouseOutHandler}
    >
      {tooltipText && tooltipIsOpen && (
        <div className={`${classes["tooltip"]} ${tooltipClassName}`}>
          {tooltipText}
        </div>
      )}
      <button className={`${classes["btn"]} ${className}`} {...rest}>
        {children}
      </button>
    </div>
  );
};

export default CustomBtn;
