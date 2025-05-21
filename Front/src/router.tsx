// src/routes/router.tsx
import {
  createBrowserRouter,
} from "react-router";
import { Login } from "./Pages/Login";
import { Button } from "./components/buttonComponent/buttonComponent";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/dashboard",
    element: <Button label="teste" />,
  },
]);