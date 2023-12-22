import { createBrowserRouter, RouterProvider } from "react-router-dom";
import classes from "./App.module.css";
import RootElement from "./pages/RootElement";
import HomePage from "./pages/HomePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootElement />,
    children: [
      {
        index: true,
        element: <HomePage />,
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
