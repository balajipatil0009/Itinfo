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
import Cpp from "./pages/syllabus/Cpp.jsx";
import Adobe_InDesign from "./pages/syllabus/Adobe_InDesign.jsx";
import Adobe_Illustrator from "./pages/syllabus/Adobe_Illustrator.jsx";
import CorelDraw from "./pages/syllabus/CorelDraw.jsx";
import CoreJava from "./pages/syllabus/CoreJava.jsx";
import Chash from "./pages/syllabus/Chash.jsx";
import HTml from "./pages/syllabus/HTml.jsx";
import CSS from "./pages/syllabus/CSS.jsx";
import JavaScript from "./pages/syllabus/JavaScript.jsx";
import React1 from "./pages/syllabus/React1.jsx";
import Node1 from "./pages/syllabus/Node1.jsx";
import Angular1 from "./pages/syllabus/Angular1.jsx";
import PHP1 from "./pages/syllabus/PHP1.jsx";

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
  {
    path: "/courses/Cpp",
    element: <Cpp />,
  },
  {
    path: "/courses/Adobe_InDesign",
    element: <Adobe_InDesign />,
  },
  {
    path: "/courses/Illustrator",
    element: <Adobe_Illustrator />,
  },
  {
    path: "/courses/CorelDraw",
    element: <CorelDraw />,
  },
  {
    path: "/courses/Core_Java",
    element: <CoreJava />,
  },
  {
    path: "/courses/Chash",
    element: <Chash />,
  },
  {
    path: "/courses/html",
    element: <HTml />,
  },
  {
    path: "/courses/CSS",
    element: <CSS />,
  },
  {
    path: "/courses/Java Script",
    element: <JavaScript />,
  },
  {
    path: "/courses/ReactJS",
    element: <React1 />,
  },
  {
    path: "/courses/nodejs",
    element: <Node1 />,
  },
  {
    path: "/courses/Angular",
    element: <Angular1 />,
  },
  {
    path: "/courses/PHP",
    element: <PHP1 />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={routes} />
  </React.StrictMode>
);
