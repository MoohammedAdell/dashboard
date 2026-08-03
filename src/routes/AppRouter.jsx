import { createBrowserRouter } from "react-router-dom";

import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import ProtectedRoute from "./ProtectedRoute";
import Dashboard from "../pages/Dashboard/Dashboard";
import DashboardLayout from "../layouts/DashboardLayout";
import Profile from "../pages/Profile/Profile";
import Settings from "../pages/Settings/Settings";
import Tasks from "../pages/Tasks/Tasks";
import Analytics from "../pages/Analytics/Analytics";
import Users from "../pages/Users/Users";
import Calendar from "../pages/Calendar/Calendar";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/dashboard",
    element: (
      <ProtectedRoute>
        <DashboardLayout />
      </ProtectedRoute>
    ),

    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: "profile",
        element: <Profile />,
      },
      {
        path: "settings",
        element: <Settings />,
      },
      {
        path: "tasks",
        element: <Tasks />,
      },
      {
        path: "analytics",
        element: <Analytics />,
      },
      {
        path: "calendar",
        element: <Calendar />,
      },
      {
        path: "users",
        element: <Users />,
      },
    ],
  },
]);

export default router;
