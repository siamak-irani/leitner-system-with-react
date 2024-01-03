import axios from "../../api/axios";

export const getReviewArr = async () => {
  const res = await axios.get("review_array");
  return res.data;
};
