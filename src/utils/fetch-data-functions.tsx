import axios from "../api/axios";

export const fetchProgressData = async () => {
  const res = await axios.get("progress");
  return res.data;
};
