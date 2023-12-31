import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { QueryClientProvider, QueryClient } from "react-query";

const queryClient = new QueryClient({
  // defaultOptions: {
  //   queries: { staleTime: Infinity, retry: 1, refetchOnWindowFocus: false },
  // },
});

const root = ReactDOM.createRoot(
  document.getElementById("leitner-system") as HTMLElement
);
root.render(
  <QueryClientProvider client={queryClient}>
    <App />
  </QueryClientProvider>
);
