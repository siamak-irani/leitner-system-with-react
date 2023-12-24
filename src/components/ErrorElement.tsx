import React from "react";

import classes from "./ErrorElement.module.css";
import { Link } from "react-router-dom";
import { AxiosError } from "axios";

type ErrorElementProps = {
  status?: number | null;
  error?: AxiosError | unknown;
};

const ErrorElement = ({ status, error }: ErrorElementProps) => {
  const statusCode =
    status && error instanceof AxiosError && error.response?.status;

  let title = "خطا!";
  let message = "مشکلی پیش آمد. لطفا دوباره تلاش کنید";

  switch (statusCode) {
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
