import React from "react";

import classes from "./SelectWordTitle.module.css";

const SelectWordTitle = () => {
  return (
    <h1 className={`${classes["SelectWordTitle"]}`}>
      لطفا انتخاب کنید که می‌خواهید از کدام واژه شروع به یادگیری کنید
    </h1>
  );
};

export default SelectWordTitle;