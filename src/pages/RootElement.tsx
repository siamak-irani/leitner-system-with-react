import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import MainHeader from "../components/main-header/MainHeader";
import { useQuery } from "react-query";
import { fetchProgressData } from "../utils/fetch-data-functions";
import RouterLoading from "../components/RouterLoading";
import ErrorElement from "../components/ErrorElement";
import { AxiosError } from "axios";

const RootElement = () => {
  const navigate = useNavigate()
  const progressQuery = useQuery({
    queryKey: "progress",
    queryFn: fetchProgressData,
  });

  if (progressQuery.isLoading) return <RouterLoading />;
  if (progressQuery.isError)
    return <ErrorElement error={progressQuery.error} />;

  const progressData = progressQuery.data

  // if (progressData.selected_word_index === -1)


  return (
    <div>
      <MainHeader />
      <Outlet />
    </div>
  );
};

export default RootElement;
