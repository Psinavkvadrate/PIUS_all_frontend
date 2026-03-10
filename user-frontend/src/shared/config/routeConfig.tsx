import { type RouteObject } from "react-router-dom";
import { MainPage } from "../../pages/Main/ui/MainPage";
import { UserOrdersPage } from "../../pages/UserOrdersPage/ui/UserOrdersPage";

export const routeConfig: RouteObject[] = [
  {
    path: "/",
    element: <MainPage />,
  },
  {
    path: "/orders",
    element: <UserOrdersPage />
  }
];