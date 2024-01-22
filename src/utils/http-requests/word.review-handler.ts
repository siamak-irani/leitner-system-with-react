import { UseMutationResult } from "react-query";
import { Cell, CellNumber, Word } from "../../lib/type";
import { wordArraToObject } from "../wordArray-to-object";
import { SetCellData } from "./set-cell-data";

type ParamType = {
  reviewArray: Word[];
  currentWord: Word;
  reviewMutation: UseMutationResult<any, unknown, Word[], unknown>;
  cellMutation:UseMutationResult<any, unknown, SetCellData, unknown>;
  nextCellData:Cell|undefined;
  nextCell:CellNumber
};

export const wordRreviewHandler = ({
  reviewArray,
  currentWord,
  reviewMutation,
  cellMutation,
  nextCellData,
  nextCell
}: ParamType) => {
  let removedWord: Word;

    const newReviewArr = reviewArray.filter((word: Word) => {
      if (word.id === currentWord.id) removedWord = word;
      return word.id !== currentWord.id;
    });

    const removedWordObj = wordArraToObject([removedWord!]);
    

    return (reviewMutation
      .mutateAsync(newReviewArr)
      .then(() => {
        return cellMutation.mutateAsync({
          cellNumber: nextCell,
          newData: {
            ...nextCellData!,
            p1: { ...nextCellData?.p1, ...removedWordObj },
          },
        });
      })
      .catch((err) => console.log(err)))
};
