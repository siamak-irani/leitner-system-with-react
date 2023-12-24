import React from "react";
import { Outlet } from "react-router-dom";
import MainHeader from "../components/main-header/MainHeader";
import { useQuery } from "react-query";
import { fetchProgressData } from "../utils/fetch-data-functions";
import RouterLoading from "../components/RouterLoading";
import ErrorElement from "../components/ErrorElement";
import { AxiosError } from "axios";

const RootElement = () => {
  const progressQuery = useQuery({
    queryKey: "progress",
    queryFn: fetchProgressData,
  });

  console.log();

  if (progressQuery.isLoading) return <RouterLoading />;
  if (progressQuery.isError)
    return <ErrorElement error={progressQuery.error} />;

  return (
    <div>
      <MainHeader />
      <Outlet />
    </div>
  );
};

export default RootElement;
