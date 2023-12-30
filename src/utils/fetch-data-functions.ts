import axios from "../api/axios";
import { PaginatedWordsData } from "../lib/type";
import { delay } from "./delay";

export const fetchPaginatedWordsData = async (page: number) => {
  const limit = 20;
  const res = await axios.get("all_words", {
    params: {
      _limit: limit,
      _page: page,
    },
  });

  // await delay(2 * 1000);

  const hasNextPage = page * limit < parseFloat(res.headers["x-total-count"]);

  return {
    words: res.data,
    nextPage: hasNextPage ? page + 1 : null,
    prevPage: page > 1 ? page - 1 : null,
  };
};
