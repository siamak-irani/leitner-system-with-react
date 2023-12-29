import React from "react";

import classes from "./CustomBtn.module.css";

interface CustomBtnProps extends React.ComponentPropsWithoutRef<"button"> {
  children?: React.ReactNode;
}

const CustomBtn = ({ children, className }: CustomBtnProps) => {
  return (
    <button className={`${classes["CustomBtn"]} ${className}`}>
      {children}
    </button>
  );
};

export default CustomBtn;
