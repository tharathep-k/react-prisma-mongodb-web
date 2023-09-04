import { createBrowserRouter, RouterProvider } from "react-router-dom";
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
  { path: "/showlist", element: <ShowListPage /> },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
