import React from "react";
import ReactDOM from "react-dom";

import classes from "./Modal.module.css";
import Backdrop from "./Backdrop";

interface DivElementPrpps extends React.ComponentPropsWithoutRef<"div"> {
  children: React.ReactNode;
}
const Overlay = ({ children, className, ...rest }: DivElementPrpps) => {
  return (
    <>
      {ReactDOM.createPortal(
        <div className={`${classes["overlay"]} ${className}`} {...rest}>
          {children}
        </div>,
        document.getElementById("global-overlay")!
      )}
    </>
  );
};

const Modal = ({ className, onClick, children, ...rest }: DivElementPrpps) => {
  return (
    <div className={`${classes["Modal"]}`}>
      <Overlay className={className} {...rest}>
        {children}
      </Overlay>
      <Backdrop onClick={onClick} />
    </div>
  );
};

export default Modal;
