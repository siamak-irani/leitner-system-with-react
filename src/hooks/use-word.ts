import { useQuery } from "react-query";
import { getWord } from "../utils/http-requests/get-word";
import { Word } from "../lib/type";

export const useWord = (index: number) => {
  const wordQuery = useQuery({
    queryKey: ["words", index],
    queryFn: () => getWord(index),
  });
  return wordQuery;
};
