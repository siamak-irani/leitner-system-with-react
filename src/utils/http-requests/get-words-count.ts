import axios from "../../api/axios";

export const getWordsCount = async () => {
  const res = await axios.get("words-count");
  return res.data;
};
