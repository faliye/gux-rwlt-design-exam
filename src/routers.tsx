import {
  createBrowserRouter,
  RouteObject,
} from "react-router-dom";

import Login from "./pages/logIn/Login";
import Graph from "./pages/graph/Graph";

export const routeConfig: RouteObject[]=[
  {
    path: '/',
    element: <Login />,
  },
  {
    path: '/graph',
    element: <Graph />,
  }
];

export const createRouter = () => createBrowserRouter(routeConfig);