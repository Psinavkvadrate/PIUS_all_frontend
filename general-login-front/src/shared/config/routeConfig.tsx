import { type RouteObject } from "react-router-dom";
import { LoginPage } from "../../pages/login/ui/LoginPage";

export const routeConfig: RouteObject[] = [
  {
    path: "/",
    element: <LoginPage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
];