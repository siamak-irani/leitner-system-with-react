import { createBrowserRouter, RouterProvider } from "react-router-dom";
import classes from "./App.module.css";
import RootElement from "./pages/RootElement";
import HomePage from "./pages/HomePage";
import ErrorElement from "./components/ErrorElement";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootElement />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "*",
        element: <ErrorElement status={404} />,
      },
    ],
  },
]);

function App() {
  return (
    <div className={`${classes["App"]}`}>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
