import axios from "../../api/axios";

export const getWord = async (index: number) => {
  if (index === -1) return null;
  const res = await axios.get(`all_words/${index}`);
  return res.data;
};
