import React from "react";
import WordsList from "../components/select-words-page/WordsList";
import { useInfiniteQuery } from "react-query";
import { fetchPaginatedWordsData } from "../utils/fetch-data-functions";
import { PaginatedWordsData } from "../lib/type";
import ErrorElement from "../components/ErrorElement";
import RouterLoading from "../components/RouterLoading";
import { useInfiniteWordsList } from "../hooks/use-infinte-words-data";
import SelectWordTitle from "../components/select-words-page/SelectWordTitle";

const SelectWordsPage = () => {
  return (
    <>
      <SelectWordTitle />
      <WordsList />
    </>
  );
};

export default SelectWordsPage;
