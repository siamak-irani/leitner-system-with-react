import React from "react";

import classes from "./CustomBtn.module.css";

interface CustomBtnProps extends React.ComponentPropsWithoutRef<"button"> {
  children?: React.ReactNode;
}

const CustomBtn = ({ children, className, ...rest }: CustomBtnProps) => {
  return (
    <button className={`${classes["CustomBtn"]} ${className}`} {...rest}>
      {children}
    </button>
  );
};

export default CustomBtn;
