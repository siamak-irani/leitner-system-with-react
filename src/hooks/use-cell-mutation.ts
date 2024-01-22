import { useMutation } from "react-query";
import { setCellData } from "../utils/http-requests/set-cell-data";

export const useCellMutation = () => {
  const cellMutation = useMutation({ mutationFn: setCellData });
  return cellMutation;
};
