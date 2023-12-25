import { useInfiniteQuery } from "react-query";
import { PaginatedWordsData, Word } from "../lib/type";
import { fetchPaginatedWordsData } from "../utils/fetch-data-functions";

export const useInfiniteWordsList = () => {
  const wordsQuery = useInfiniteQuery<PaginatedWordsData>({
    queryKey: ["words", "infinity"],
    getNextPageParam: (prevData) => prevData.nextPage,
    queryFn: ({ pageParam = 1 }) => fetchPaginatedWordsData(pageParam),
  });
  return wordsQuery;
};


  