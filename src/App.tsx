import { createBrowserRouter, RouterProvider } from "react-router-dom";
import classes from "./App.module.css";
import RootElement from "./pages/RootElement";

const router = createBrowserRouter([{ path: "/", element: <RootElement /> }]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
