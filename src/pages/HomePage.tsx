import React, { useEffect } from "react";
import LeitnerBox from "../components/home-page/LeitnerBox";
import { useQueryClient } from "react-query";
import { Progress } from "../lib/type";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const progressQuery = queryClient.getQueryData<Progress>(["progress"]);

  useEffect(() => {
    if (progressQuery?.selected_word_index === -1) navigate("select-words");
  }, [progressQuery]);
  return (
    <div className="home-page">
      <LeitnerBox />
    </div>
  );
};

export default HomePage;
