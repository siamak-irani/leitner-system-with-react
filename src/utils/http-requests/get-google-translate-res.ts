import axios from "../../api/axios";

export const getGoogleTranslateRes = async (word: string) => {
  // https://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl=fa&dt=t&q=hello

  const res = await axios.get("google");
  const data = res.data;
  return data[0][0][0];
};
