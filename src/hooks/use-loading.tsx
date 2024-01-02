import { ReactElement, useState } from "react";
import { UseQueryResult } from "react-query";
import RouterLoading from "../components/RouterLoading";
import ErrorElement from "../components/ErrorElement";
import LoadingSpinner from "../ui/LoadingSpinner";

export const useLoading = (queries: UseQueryResult<any, unknown>[]) => {
  const isLoading = queries.reduce((isLoading, query) => {
    return isLoading || query.isLoading;
  }, false);

  const isError = queries.reduce((isErr, query) => {
    return isErr || query.isError;
  }, false);

  const routerLoadingRenderer = (() => {
    if (isLoading) return <RouterLoading />;
    if (isError) return <ErrorElement />;
    return null;
  })();

  const elementLoadingRenderer = (() => {
    if (isLoading) return <LoadingSpinner />;
    if (isError)
      return (
        <button>
          <LoadingSpinner noAnimation={true} />
        </button>
      );
    return null;
  })();

  return {
    routerLoadingRenderer,
    elementLoadingRenderer,
  };
};
