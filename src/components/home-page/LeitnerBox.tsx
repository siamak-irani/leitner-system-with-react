import React, { useState } from "react";
import classes from "./LeitnerBox.module.css";
import { Progress, WordsCount } from "../../lib/type";
import BoxContainer from "./BoxContainer";
import StartButtons from "./StartButtons";
import { useProgressQuery } from "../../hooks/use-progress-qurey";
import WordDisplayModal from "./word-modal/WordDisplayModal";
import { useLoading } from "../../hooks/use-loading";

type LeitnerBoxProps = {
  data: WordsCount;
};

const LeitnerBox = ({ data }: LeitnerBoxProps) => {
  const [wordModalIsOpen, setWordModalIsOpen] = useState(false);
  const progressQuery = useProgressQuery();
  const { active_cell } = progressQuery.data;


  const { elementLoadingRenderer } = useLoading([progressQuery]);
  if (elementLoadingRenderer) return elementLoadingRenderer.element;

  const openWordModal = () => {
    setWordModalIsOpen(true);
  };

  const closeWordModal = () => {
    setWordModalIsOpen(false);
  };

  const { cells } = data;

  return (
    <div className={`${classes["LeitnerBox"]}`}>
      <StartButtons onAddNewWord={openWordModal} isActive={active_cell === 0} />
      <BoxContainer
        cells={cells}
        activeCell={active_cell}
        onWordReview={openWordModal}
      />
      {wordModalIsOpen && (
        <WordDisplayModal
          onCloseModal={closeWordModal}
          activeCell={active_cell}
        />
      )}
    </div>
  );
};

export default LeitnerBox;
