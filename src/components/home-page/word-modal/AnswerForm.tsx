import React, { useRef } from "react";

import classes from "./AnswerForm.module.css";
import CustomBtn from "../../CustomBtn";

type AnswerFormProps = {
  onSubmitForm: (
    e: React.FormEvent<HTMLFormElement>,
    inputValue: string
  ) => void;
};

const AnswerForm = ({ onSubmitForm }: AnswerFormProps) => {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <form
      onSubmit={(e) => {
        onSubmitForm(e, inputRef.current?.value as string);
      }}
      className={`${classes["answer-form"]}`}
    >
      <input type="text" placeholder="پاسخ خود را بنویسید" ref={inputRef} autoFocus/>
      <CustomBtn className={classes["btn"]}>دیدن نتیجه</CustomBtn>
    </form>
  );
};

export default AnswerForm;
