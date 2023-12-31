import { useQuery } from "react-query";
import { getWordsCount } from "../utils/http-requests/get-words-count";

export const useWordsCounterQuery = () => {
  const wordsCounterQuery = useQuery({
    queryKey: ["words-counter"],
    queryFn: getWordsCount,
  });
  return wordsCounterQuery;
};
