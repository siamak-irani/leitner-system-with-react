import { AxiosResponse } from "axios";
import axios from "../../api/axios";
import { Word } from "../../lib/type";

// type SetReviewArrayParams =
//   | { type: "AnswerIsTrue" | "AnswerIsNotTrue"; newData: Word[] }
//   | { type: "FillArray"; newData: Word[] };

export const setReviewArray = async (newData: Word[]) => {
  // let res: AxiosResponse<any, any>;
  // switch (type) {
  //   case "AnswerIsTrue":
  //   case "AnswerIsNotTrue":
  //     res = await axios.delete(`review_array/${newData.id}`);
  //     break;
  //   case "FillArray":
  //     res = await axios.put("review_array", newData);
  // }
  // return res.data;

  const res = await axios.put("review_array", newData);
  return res.data;
};
