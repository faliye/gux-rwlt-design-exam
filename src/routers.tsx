import {
  createBrowserRouter,
  RouteObject,
} from "react-router-dom";

import { Layout } from './component'

import Login from "./pages/logIn/Login";
import Graph from "./pages/graph/Graph";

export const routeConfig: RouteObject[] = [
  {
    path: '',
    element: <Login />,
  },
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: 'graph',
        element: <Graph />
      }
    ]
  }
];

export const createRouter = () => createBrowserRouter(routeConfig);