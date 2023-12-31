import React, { useEffect } from "react";
import LeitnerBox from "../components/home-page/LeitnerBox";
import { useQueryClient } from "react-query";
import { Progress } from "../lib/type";
import { useNavigate } from "react-router-dom";
import { useProgressQuery } from "../hooks/use-progress-qurey";

const HomePage = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const progressQuery = useProgressQuery();

  useEffect(() => {
    // console.log(progressQuery)
    if (progressQuery.data.selected_word_index === -1) navigate("select-words");
  }, [progressQuery]);
  return (
    <div className="home-page">
      <LeitnerBox />
    </div>
  );
};

export default HomePage;
