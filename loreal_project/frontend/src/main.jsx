import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App";
import Home from "./pages/Home/Home"
import ProductType from "./pages/ProductType/ProductType";

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path:"/",
        element: <Home />,
      },
      {
        path:"/producttype",
        element: <ProductType />,
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
