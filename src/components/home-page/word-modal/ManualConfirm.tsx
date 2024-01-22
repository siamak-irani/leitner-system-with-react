import React from "react";

import classes from "./ManualConfirm.module.css";
import CustomBtn from "../../CustomBtn";
import { Cell, CellNumber, Word } from "../../../lib/type";
import { useReviewMutation } from "../../../hooks/use-review-mutation";
import { useCellMutation } from "../../../hooks/use-cell-mutation";
import { useQueryClient } from "react-query";
import { useReviewQuery } from "../../../hooks/use-review-query";
import { useCellQuery } from "../../../hooks/use-cell-query";
import { wordArraToObject } from "../../../utils/wordArray-to-object";
import { wordRreviewHandler } from "../../../utils/http-requests/word.review-handler";

type ManualConfirmProps = {
  isAddNewWordModal: boolean;
  isEvaluated: boolean;
  currentWord: Word;
  activeCell: CellNumber;
};

const ManualConfirm = ({
  isAddNewWordModal,
  isEvaluated,
  currentWord,
  activeCell,
}: ManualConfirmProps) => {
  const queryClient = useQueryClient();

  const reviewArray = queryClient.getQueryData<Word[]>(["review"])!;

  const nextCell = (activeCell + 1) as CellNumber;

  // const nextCellQuery = useCellQuery(nextCell);

  // const nextCellData = nextCellQuery.data;
  const nextCellData = queryClient.getQueryData<Cell>(["cell", nextCell]);

  const reviewMutation = useReviewMutation();
  const cellMutation = useCellMutation();

  const answerIsTrueHandler = () => {
    wordRreviewHandler({
      reviewArray,
      currentWord,
      reviewMutation,
      cellMutation,
      nextCellData,
      nextCell,
    });
  };

  return (
    <>
      <div className={`${classes["ManualConfirm"]}`}>
        {isEvaluated && (
          <>
            {isAddNewWordModal ? (
              <div
                className={`${classes["new-words"]} ${classes["btn-container"]}`}
              >
                <CustomBtn
                  tooltipClassName={classes["manual-confirm-tooltip"]}
                  tooltipText="واژه را به جعبه اضافه کنید"
                >
                  افزودن
                </CustomBtn>
                <CustomBtn
                  tooltipClassName={classes["manual-confirm-tooltip"]}
                  tooltipText="اگر فکر میکنید واژه آسان است به کلی از آن عبور کنید"
                >
                  پرش
                </CustomBtn>
              </div>
            ) : (
              <div
                className={`${classes["cells-btn"]} ${classes["btn-container"]}`}
              >
                <CustomBtn
                  onClick={answerIsTrueHandler}
                  tooltipText=""
                  readyClass="positive"
                >
                  بلدم
                </CustomBtn>
                <CustomBtn tooltipText="" readyClass="negative">
                  بلد نیستم
                </CustomBtn>
              </div>
            )}
          </>
        )}
      </div>
    </>
  );
};

export default ManualConfirm;
