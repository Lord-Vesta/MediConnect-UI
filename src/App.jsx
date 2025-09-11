
import { RouterProvider } from "react-router-dom";

import "react-toastify/dist/ReactToastify.css";

import { routes } from "./routes.jsx";

const App = () => {
  return <RouterProvider router={routes} />;
};

export default App;
