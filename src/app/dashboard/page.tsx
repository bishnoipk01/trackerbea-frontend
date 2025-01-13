"use client";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import StatsOverview from "./components/StatsOverview";
import HabitsList from "./components/HabitsList";
import TasksList from "./components/TasksList";
import Calendar from "./components/Calendar";
import Notifications from "./components/Notifications";

import { useSession } from "next-auth/react";

export default function Dashboard() {
  const { data, status } = useSession();
  console.log(status);
  console.log(data?.user);
  return (
    <div className="flex h-screen bg-gray-900 text-white">
      {/* Sidebar */}
      <Sidebar />

      <div className="flex flex-col flex-grow">
        {/* Navbar */}
        <Navbar user={data?.user} />

        {/* Main Content */}
        <div className="flex-grow p-4 grid grid-cols-1 lg:grid-cols-3 gap-4">
          <div className="lg:col-span-2">
            <StatsOverview />
            <HabitsList />
            <TasksList />
          </div>
          <div>
            <Notifications />
            <Calendar />
          </div>
        </div>
      </div>
    </div>
  );
}
