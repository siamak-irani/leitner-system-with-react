import axios from "../../api/axios";
import { CellNumber } from "../../lib/type";
import { LAST_PARTITION } from "../constant-values";
import { delay } from "../delay";

export const getCellData = async (cell_num: CellNumber) => {
  let res;
  if (cell_num === 0) {
    res = await axios.get("all_words");
  } else {
    res = await axios.get(`c${cell_num}`);
  }

  await delay(1000);

  // if (cell_num === 0) {
  //   return res.data;
  // } else {
  //   return res.data[LAST_PARTITION[`c${cell_num}`]];
  // }

  return res.data;
};
