// src/routes/router.tsx
import {
  createBrowserRouter,
} from "react-router";
import { Login } from "./Pages/Login";
import { Dashboard } from "./Pages/Dashboard";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/dashboard",
    element: <Dashboard/>,
  },
]);