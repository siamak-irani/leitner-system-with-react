import React, { useEffect, useState } from "react";

import classes from "./WordsList.module.css";
import WordIndexForm from "./WordIndexForm";
import Words from "./Words";
import ConfirmWord from "./ConfirmWord";
import { useNavigate } from "react-router-dom";
import { useQueryClient } from "react-query";
import { Progress } from "../../lib/type";
import { useProgressQuery } from "../../hooks/use-progress-qurey";

const WordsList = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [wordIndex, setWordIndex] = useState(-1);
  const navigate = useNavigate();
  const progressQuery = useProgressQuery();

  useEffect(() => {
    if (progressQuery.data.selected_word_index !== -1) navigate("/");
  }, [progressQuery.data.selected_word_index]);

  const formSubmitHandler = (
    event: React.FormEvent<HTMLFormElement>,
    inputValue: number
  ) => {
    event.preventDefault();
    setWordIndex(inputValue - 1);
    setModalIsOpen(true);
  };

  const radioInputClickHandler = (
    event: React.MouseEvent<HTMLInputElement, MouseEvent>,
    inputValue: number
  ) => {
    setModalIsOpen(true);
    setWordIndex(inputValue);
  };

  const closeModalHandler = () => {
    setWordIndex(-1);
    setModalIsOpen(false);
  };

  return (
    <div className={`${classes["WordsList"]}`}>
      <WordIndexForm onSubmitForm={formSubmitHandler} />
      <Words onSelectWord={radioInputClickHandler} />
      <ConfirmWord
        selectedIndex={wordIndex}
        onClose={closeModalHandler}
        isVisiable={modalIsOpen}
      />
    </div>
  );
};

export default WordsList;
