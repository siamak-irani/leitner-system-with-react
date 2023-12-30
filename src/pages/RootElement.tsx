import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import MainHeader from "../components/main-header/MainHeader";
import { useNavigate } from "react-router-dom";
import { useProgressQuery } from "../hooks/use-progress-qurey";
import ErrorElement from "../components/ErrorElement";
import RouterLoading from "../components/RouterLoading";

const RootElement = () => {
  const progressQuery = useProgressQuery();

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
