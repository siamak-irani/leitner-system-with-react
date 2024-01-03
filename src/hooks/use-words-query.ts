import { useQuery } from "react-query";
import { CellNumber, Word } from "../lib/type";
import { getWordData } from "../utils/http-requests/get-word-data";
import { LAST_PARTITION } from "../utils/constant-values";

export const useWordsQuery = (
  cell_num: CellNumber,
  opitons?: { enabled?: boolean }
) => {
  const wordsQuery = useQuery<Word[]>({
    queryKey: ["words", { cell: cell_num }],
    queryFn: () => getWordData(cell_num),
    enabled: opitons?.enabled,
  });
  return wordsQuery;
};
