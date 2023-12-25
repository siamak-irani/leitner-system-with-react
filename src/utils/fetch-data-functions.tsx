import axios from "../api/axios";
import { PaginatedWordsData } from "../lib/type";

export const fetchProgressData = async () => {
  const res = await axios.get("progress");
  return res.data;
};

export const fetchPaginatedWordsData = async (
  page: number
) => {
  const limit = 10;
  const res = await axios.get("all_words", {
    params: {
      _limit: limit,
      _page: page,
    },
  });

  const hasNextPage = page * limit < parseFloat(res.headers["x-total-count"]);

  return {
    words: res.data,
    nextPage: hasNextPage ? page + 1 : null,
    prevPage: page > 1 ? page - 1 : null,
  };
};
