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
    if (isLoading)
      return { element: <LoadingSpinner />, isLoading: true, isError: false };
    if (isError)
      return {
        element: (
          <button
            onClick={() => {
              queries.forEach((query) => {
                query.refetch();
              });
            }}
            style={{
              background: "white",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "50%",
              margin: "auto",
            }}
          >
            <LoadingSpinner noAnimation={true} />
          </button>
        ),
        isLoading: false,
        isError: true,
      };
    return null;
  })();

  return {
    routerLoadingRenderer,
    elementLoadingRenderer,
  };
};
