import React, { useEffect } from "react";
import LeitnerBox from "../components/home-page/LeitnerBox";
import { useNavigate } from "react-router-dom";
import { useProgressQuery } from "../hooks/use-progress-qurey";
import { useWordsCounterQuery } from "../hooks/use-words-counter-query";
import RouterLoading from "../components/RouterLoading";
import ErrorElement from "../components/ErrorElement";

const HomePage = () => {
  const navigate = useNavigate();
  const progressQuery = useProgressQuery();
  const wordsCounterQuery = useWordsCounterQuery();

  useEffect(() => {
    if (progressQuery.data.selected_word_index === -1) navigate("select-words");
  }, [progressQuery]);

  if (progressQuery.isLoading || wordsCounterQuery.isLoading)
    return <RouterLoading />;

  if (progressQuery.isError || wordsCounterQuery.isError)
    return <ErrorElement />;

  return (
    <>
      <LeitnerBox data={wordsCounterQuery.data} />
    </>
  );
};

export default HomePage;
