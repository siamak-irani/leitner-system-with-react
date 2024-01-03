import { useQuery } from "react-query";
import { getGoogleTranslateRes } from "../utils/http-requests/get-google-translate-res";

export const useGoogleTranslateQuery = (
  word: string,
  opitons?: { enabled?: boolean }
) => {
  const googleTranslateQuery = useQuery({
    queryKey: ["google", [`${word}`]],
    queryFn: () => getGoogleTranslateRes(word),
    enabled: opitons?.enabled,
  });
  return googleTranslateQuery;
};
