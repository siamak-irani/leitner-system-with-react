import React from "react";
import { ReactComponent as LoadingSVG } from "../files/icons/refresh_FILL0_wght400_GRAD0_opsz24.svg";

import classes from "./LoadingSpinner.module.css";

type LoadingSpinnerProps = {
  noAnimation?: boolean;
};

const LoadingSpinner = ({ noAnimation = false }: LoadingSpinnerProps) => {
  return (
    <div className={`${classes["LoadingSpinner"]}`}>
      <LoadingSVG style={noAnimation ? { animation: "none" } : {}} />
    </div>
  );
};

export default LoadingSpinner;
