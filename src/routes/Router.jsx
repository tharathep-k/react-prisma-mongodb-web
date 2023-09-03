import { createBrowserRouter, RouterProvider } from "react-router-dom";

import LoginPage from "../pages/LoginPage";
import ShowListPage from "../pages/ShowListPage";

const router = createBrowserRouter([
  { path: "/", element: <LoginPage /> },
  { path: "/showlist", element: <ShowListPage /> },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
