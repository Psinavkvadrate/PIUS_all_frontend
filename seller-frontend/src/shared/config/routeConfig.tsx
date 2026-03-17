import { type RouteObject } from "react-router-dom";
import { SellerDashboardPage } from "../../pages/Dashboard/ui/SellerDashboardPage";

export const routeConfig: RouteObject[] = [
  {
    path: "/",
    element: <SellerDashboardPage />,
  },
];
