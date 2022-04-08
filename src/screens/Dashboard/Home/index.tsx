import { lazy } from "react";
import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { Route, Routes } from "react-router-dom";

import { Sidebar, SidebarItem } from "@/components/Sidebar";
import withAuth from "@/hocs/withAuth";
import withSuspense from "@/hocs/withSuspense";

import EditBotScreen from "../EditBot";

const Home = withAuth(withSuspense(lazy(() => import("./DashboardHome"))));

const items: SidebarItem[][] = [
  [
    {
      group: false,
      href: "/dashboard",
      icon: AiOutlineHome,
      title: "Dashboard",
    },
    {
      group: false,
      href: "/dashboard/test",
      icon: AiOutlineUser,
      title: "Test",
    },
  ],
];

export default function Dashboard() {
  return (
    <div className="flex h-full overflow-hidden">
      <Sidebar itemsGroups={items} />
      <main className="flex-1 overflow-auto p-4">
        <Routes>
          <Route element={<Home />} path="/" />
          <Route element={<EditBotScreen />} path="/:botId" />
        </Routes>
      </main>
    </div>
  );
}
