import React from "react";

import classes from "./ErrorElement.module.css";
import { Link, useRouteError } from "react-router-dom";

type ErrorElementProps = {
  status?: number;
};

const ErrorElement = ({ status }: ErrorElementProps) => {
  const error = useRouteError();

  let title = "خطا!";
  let message = "مشکلی پیش آمد. لطفا دوباره تلاش کنید";

  switch (status) {
    case 404:
      title = "صفحه یافت نشد!";
      message = "این صفحه وجود ندارد";
  }

  return (
    <div className={`${classes["ErrorElement"]}`}>
      <div className={`${classes["container"]}`}>
        <h1>{title}</h1>
        <p>{message}</p>
        <Link to="/">بازگشت به خانه</Link>
      </div>
    </div>
  );
};

export default ErrorElement;
