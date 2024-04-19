import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Courses from "./pages/Courses.jsx";
import About from "./pages/About.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import DataSci from "./pages/DataSci.jsx";
import SwTesting from "./pages/SwTesting.jsx";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/courses",
    element: <Courses />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/courses/dataSci",
    element: <DataSci />,
  },
  {
    path: "/courses/SoftwareTesting",
    element: <SwTesting />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={routes} />
  </React.StrictMode>
);
