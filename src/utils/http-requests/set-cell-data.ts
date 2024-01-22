import axios from "../../api/axios";
import { type CellNumber, WordMap, Cell } from "../../lib/type";

export type SetCellData = { cellNumber: CellNumber; newData: Cell };

export const setCellData = async ({ cellNumber, newData }: SetCellData) => {
  const res = await axios.put(`c${cellNumber}`, newData);
  return res.data;
};
