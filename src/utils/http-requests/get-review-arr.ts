import axios from "../../api/axios";
import { Word } from "../../lib/type";

export const getReviewArr = async () => {
  const res = await axios.get<Word[]>("review_array");
  return Object.values(res.data);
};
