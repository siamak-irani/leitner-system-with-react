import { useQuery } from "react-query";
import { getProgress } from "../utils/http-requests/progress-requests";

export const useProgressQuery = () => {
  const progressQuery = useQuery({
    queryKey: ["progress"],
    queryFn: getProgress,
  });

  return progressQuery;
};
