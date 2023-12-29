import React, { useState } from "react";

import classes from "./WordsList.module.css";
import Wrapper from "../../ui/Wrapper";
import WordIndexForm from "./WordIndexForm";
import { PaginatedWordsData } from "../../lib/type";
import { InfiniteData } from "react-query";
import Words from "./Words";
import { useInfiniteWordsList } from "../../hooks/use-infinte-words-data";
import Modal from "../../ui/Modal";
import ConfirmWord from "./ConfirmWord";

const WordsList = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const formSubmitHandler = (
    event: React.FormEvent<HTMLFormElement> | React.ChangeEvent<HTMLInputElement>
  ) => {
    event.preventDefault();
    setModalIsOpen(true)
  };

  return (
    <div className={`${classes["WordsList"]}`}>
      <WordIndexForm onSubmitForm={formSubmitHandler} />
      <Words onSelectWord={formSubmitHandler} />
      <ConfirmWord isVisiable={true} />

    </div>
  );
};

export default WordsList;
