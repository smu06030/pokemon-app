import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Dex from "./pages/Dex";
import Layout from "./components/UI/Layout";
import PokemonDetail from "./pages/PokemonDetail";
import Error from "./pages/Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <Error />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/dex", element: <Dex /> },
      { path: "/dex/:id", element: <PokemonDetail /> },
    ],
  },
]);

export default router;
