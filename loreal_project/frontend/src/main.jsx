import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App";
import Home from "./pages/Home/Home";
import Basket from "./pages/Basket/Basket";


const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path:"/",
        element: <Home />,
      },
      {
        path:"/Basket",
        element: <Basket />,
      },
    ]
  },

]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
