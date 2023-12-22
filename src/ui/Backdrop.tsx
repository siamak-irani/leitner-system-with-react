import React from "react";

import ReactDOM from "react-dom";

import classes from "./Backdrop.module.css";

type BackdropProps = React.ComponentPropsWithoutRef<"div">;

const Backdrop = ({ className, ...rest }: BackdropProps) => {
  const backdropElement = document.getElementById("backdrop");

  const backdropJSX = (
    <div
      className={`${classes["Backdrop"]} ${className && classes[className]}`}
      {...rest}
    ></div>
  );

  return (
    <>
      {backdropElement && ReactDOM.createPortal(backdropJSX, backdropElement)}
    </>
  );
};

export default Backdrop;
