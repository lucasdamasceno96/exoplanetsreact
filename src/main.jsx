import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Home from "./routes/Home";
import Best from "./routes/Best";
import Nearest from "./routes/Nearest";
import ErroPage from "./routes/ErroPage";
import "./index.css";

// CONFIGURANDO O ROUTER
import { createBrowserRouter, RouterProvider } from "react-router-dom";

/* const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/nearest",
    element: <Nearest />,
  },
  {
    path: "best",
    element: <Best />,
  },
  {
    path: "/home",
    element: <Home />,
  },
]); */

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErroPage />,
    element: <App />,
    children: [
      {
        path: "/nearest",
        element: <Nearest />,
      },
      {
        path: "/best",
        element: <Best />,
      },
      {
        path: "/home",
        element: <Home />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
