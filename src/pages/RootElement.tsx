import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import MainHeader from "../components/main-header/MainHeader";
import { useNavigate } from "react-router-dom";
import { useProgressQuery } from "../hooks/use-progress-qurey";
import ErrorElement from "../components/ErrorElement";
import RouterLoading from "../components/RouterLoading";
import { useLoading } from "../hooks/use-loading";

const RootElement = () => {
  const progressQuery = useProgressQuery();
  const { routerLoadingRenderer, elementLoadingRenderer } = useLoading([
    progressQuery,
  ]);

  if (routerLoadingRenderer) return routerLoadingRenderer;

  return (
    <div>
      <MainHeader />
      <Outlet />
    </div>
  );
};

export default RootElement;
