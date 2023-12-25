import React from "react";

import classes from "./Wrapper.module.css";

// type WrapperProps = React.ComponentPropsWithoutRef<"div">

interface WrapperProps extends React.ComponentPropsWithoutRef<"div"> {
  children: React.ReactNode;
}

const Wrapper = ({ children, className, ...rest }: WrapperProps) => {
  return <div className={`${className} ${classes["Wrapper"]}`}>{children}</div>;
};

export default Wrapper;
