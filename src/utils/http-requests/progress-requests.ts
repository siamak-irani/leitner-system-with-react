import axios from "../../api/axios";
import { Progress } from "../../lib/type";

export const getProgress = async () => {
  const res = await axios.get("progress");
  return res.data;
};

export const setProgress = async (updatedProgress: Progress) => {
  const req = await axios.put("progress", updatedProgress);
  return req.data;
};
