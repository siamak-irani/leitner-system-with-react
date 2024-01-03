import { useQuery } from "react-query";
import { getProgress } from "../utils/http-requests/progress-requests";
import { Progress } from "../lib/type";

export const useProgressQuery = () => {
  const progressQuery = useQuery({
    queryKey: ["progress"],
    queryFn: getProgress,
  });

  return progressQuery;
};
