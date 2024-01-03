import { useQuery } from "react-query";
import { getReviewArr } from "../utils/http-requests/get-review-arr";

export const useReviewQuery = (opitons?: { enabled?: boolean }) => {
  const reviewQuery = useQuery({
    queryKey: ["review"],
    queryFn: getReviewArr,
    enabled: opitons?.enabled,
  });
  return reviewQuery
};
