import { useInfiniteQuery } from "react-query";
import { PaginatedWordsData, Word } from "../lib/type";
import { fetchPaginatedWordsData } from "../utils/fetch-data-functions";
import useVisibilityStatus from "./use-element-visiablity";
import { useEffect } from "react";

export const useInfiniteWordsList = (
  parrentRef: React.RefObject<HTMLDivElement>,
  ref: React.RefObject<HTMLOListElement>
) => {
  const { seen, setSeen } = useVisibilityStatus(parrentRef, ref, {
    visibilityThreshold: 1,
    depthLevel: 1,
  });
  const wordsQuery = useInfiniteQuery<PaginatedWordsData>({
    queryKey: ["words", "infinity"],
    getNextPageParam: (prevData) => prevData.nextPage,
    queryFn: ({ pageParam = 1 }) => fetchPaginatedWordsData(pageParam),
  });


  if (seen && !wordsQuery.isError) {
    /* If we do not apply the error condition, 
    in case of error a new request will be sent with each time of scrolling .*/
    wordsQuery.fetchNextPage().then(() => {
      setSeen(false);
    });
  }

  // useEffect(() => {
  //   if (seen && !wordsQuery.isError) {
  //     /* If we do not apply the error condition, 
  //     in case of error a new request will be sent with each time of scrolling .*/
  //     wordsQuery.fetchNextPage().then(() => {
  //       setSeen(false);
  //     });
  //   }
  // }, [wordsQuery.isLoading, seen]);


  return wordsQuery;
};
