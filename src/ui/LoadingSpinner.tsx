import React from "react";
import { ReactComponent as LoadingSVG } from "../files/icons/refresh_FILL0_wght400_GRAD0_opsz24.svg";

import classes from "./LoadingSpinner.module.css";

const LoadingSpinner = () => {
  return (
    <div className={`${classes["LoadingSpinner"]}`}>
      <LoadingSVG />
    </div>
  );
};

export default LoadingSpinner;
