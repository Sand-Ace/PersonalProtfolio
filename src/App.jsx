import Aboutme from "./Pages/About/Aboutme";
import HomePage from "./Pages/Home/HomePage";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Pages/Layout";
import Project from "./Pages/MyProjects/Project";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/aboutme", element: <Aboutme /> },
      { path: "/projects", element: <Project /> },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
