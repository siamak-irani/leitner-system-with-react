import { useMutation } from "react-query";
import { setReviewArray } from "../utils/http-requests/set-review-array";
import { ReviewMutateType } from "../lib/type";

export const useReviewMutation = (opiton?: {}) => {
  const reviewMutation = useMutation({
    mutationFn: setReviewArray,
  });

  return reviewMutation;
};
