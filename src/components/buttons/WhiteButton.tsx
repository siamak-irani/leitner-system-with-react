import React, { Children } from "react";

import classes from "./WhiteButton.module.css";

interface WhiteButtonProps extends React.ComponentPropsWithoutRef<"button"> {
  children: React.ReactNode;
}

const WhiteButton = ({ className, children, ...rest }: WhiteButtonProps) => {
  return (
    <button className={`${classes["WhiteButton"]} ${className}`} {...rest}>
      {children}
    </button>
  );
};

export default WhiteButton;
