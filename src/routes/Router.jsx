import { createBrowserRouter, RouterProvider } from "react-router-dom";

import ProtectRoute from "../components/ProtectRoute";
import RedirectIfAuthenticated from "../components/RedirectIfAuthenticated";

import LoginPage from "../pages/LoginPage";
import ShowListPage from "../pages/ShowListPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <RedirectIfAuthenticated>
        <LoginPage />
      </RedirectIfAuthenticated>
    ),
  },
  {
    path: "/showlist",
    element: (
      <ProtectRoute>
        <ShowListPage />
      </ProtectRoute>
    ),
  },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
