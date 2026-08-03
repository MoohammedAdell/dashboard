import {
  User,
  Settings,
  ClipboardList,
  BarChart3,
  Calendar,
  Users,
  LayoutDashboard,
} from "lucide-react";

export const sidebarMenu = [
  {
    title: "Dashboard",
    path: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "Profile",
    path: "/dashboard/profile",
    icon: User,
  },
  {
    title: "Settings",
    path: "/dashboard/settings",
    icon: Settings,
  },
  {
    title: "Tasks",
    path: "/dashboard/tasks",
    icon: ClipboardList,
  },
  {
    title: "Analytics",
    path: "/dashboard/analytics",
    icon: BarChart3,
  },
  {
    title: "Calendar",
    path: "/dashboard/calendar",
    icon: Calendar,
  },
  {
    title: "Users",
    path: "/dashboard/users",
    icon: Users,
  },
];
