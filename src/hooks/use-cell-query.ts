import { useQuery } from "react-query";
import { CellNumber, Word } from "../lib/type";
import { getCellData } from "../utils/http-requests/get-cell-data";
import { LAST_PARTITION } from "../utils/constant-values";

export const useCellQuery = (
  cell_num: CellNumber,
  opitons?: { enabled?: boolean }
) => {
  const cellQuery = useQuery({
    queryKey: ["cell", cell_num],
    queryFn: () => getCellData(cell_num),
    enabled: opitons?.enabled,
  });
  return cellQuery;
};
