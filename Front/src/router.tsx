// src/routes/router.tsx
import {
  createBrowserRouter,
} from "react-router";
import { Login } from "./Pages/Login";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
]);