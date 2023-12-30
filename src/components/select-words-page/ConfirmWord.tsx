import React from "react";

import classes from "./ConfirmWord.module.css";
import Modal from "../../ui/Modal";
import CustomBtn from "../CustomBtn";
import { ReactComponent as CloseIcon } from "../../files/icons/close_FILL0_wght400_GRAD0_opsz48.svg";
import { useWord } from "../../hooks/use-word";
import RouterLoading from "../RouterLoading";
import ErrorElement from "../ErrorElement";
import LoadingSpinner from "../../ui/LoadingSpinner";
import { useProgressMutation } from "../../hooks/use-progress-mutation";
import { useQueryClient } from "react-query";
import { Progress } from "../../lib/type";
import { useNavigate } from "react-router-dom";

type ConfirmWordProps = {
  isVisiable: boolean;
  onClose: () => void;
  selectedIndex: number;
};

const ConfirmWord = ({
  onClose,
  isVisiable,
  selectedIndex,
}: ConfirmWordProps) => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const wordQuery = useWord(selectedIndex);
  const progressMutation = useProgressMutation();

  const confirmBtnHandler = () => {
    const progressData: Progress | undefined =
      queryClient.getQueryData("progress");

    progressMutation
      .mutateAsync({
        ...progressData,
        selected_word_index: selectedIndex,
        current_word_index: selectedIndex,
      })
      .then(() => {
        navigate("/");
      });
  };

  if (!isVisiable) return null;

  return (
    <Modal onClick={onClose} className={`${classes["confirm-word-modal"]}`}>
      <CloseIcon onClick={onClose} />
      {wordQuery.isLoading && <LoadingSpinner />}
      {wordQuery.isError && (
        <p className={`${classes["error-msg"]}`}>
          مشکلی در دریافت اطلاعات وجود دارد
        </p>
      )}
      {wordQuery.data && (
        <div className={`${classes["confirm-word"]}`}>
          <h1>آیا لغت زیر را تایید میکنید؟</h1>
          <p>
            <span>{selectedIndex + 1}. </span>
            {wordQuery.data?.spelling}
          </p>
          <div className={`${classes["buttons"]}`}>
            <CustomBtn
              className={`${classes["confirm"]}`}
              onClick={confirmBtnHandler}
              disabled={progressMutation.isLoading}
            >
              {progressMutation.isLoading ? "ارسال..." : "بله"}
            </CustomBtn>
            <CustomBtn className={`${classes["cancel"]}`} onClick={onClose}>
              انصراف
            </CustomBtn>
          </div>
        </div>
      )}
    </Modal>
  );
};

export default ConfirmWord;
