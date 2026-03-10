import { type RouteObject } from "react-router-dom";
import { MainPage } from "../../pages/Main/ui/MainPage";

export const routeConfig: RouteObject[] = [
  {
    path: "/",
    element: <MainPage />,
  },
];