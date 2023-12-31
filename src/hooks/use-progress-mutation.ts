import { useMutation, useQueryClient } from "react-query";
import { setProgress } from "../utils/http-requests/progress-requests";
import { Progress } from "../lib/type";

export const useProgressMutation = () => {
  const queryClient = useQueryClient();
  const progressMutation = useMutation({
    mutationFn: setProgress,
    onSuccess: (data) => {
      queryClient.invalidateQueries<Progress>(["progress"]);
    },
  });

  return progressMutation;
};
