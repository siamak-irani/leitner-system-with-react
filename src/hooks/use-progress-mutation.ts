import { useMutation, useQueryClient } from "react-query";
import { setProgresss } from "../utils/http-requests/progress-requests";

export const useProgressMutation = () => {
  const queryClient = useQueryClient();
  const progressMutation = useMutation({
    mutationFn: setProgresss,
    onSuccess: () => {
      queryClient.invalidateQueries(["progress"]);
    },
  });

  return progressMutation;
};
