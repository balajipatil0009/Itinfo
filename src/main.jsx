import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

import Courses from "./pages/Courses.jsx";
import About from "./pages/About.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import DataSci from "./pages/syllabus/DataSci.jsx";
import SwTesting from "./pages/syllabus/SwTesting.jsx";
import SwTesting2 from "./pages/syllabus/SwTesting2.jsx";
import JavaFullStack from "./pages/syllabus/JavaFullStack.jsx";
import Csyl from "./pages/syllabus/Csyl.jsx";
import Python from "./pages/syllabus/Python.jsx";

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
  {
    path: "/courses/javaFullStack",
    element: <JavaFullStack />,
  },
  {
    path: "/courses/C",
    element: <Csyl />,
  },
  {
    path: "/courses/Python",
    element: <Python />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={routes} />
  </React.StrictMode>
);
