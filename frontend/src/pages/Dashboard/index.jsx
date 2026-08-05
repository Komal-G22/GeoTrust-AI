import { useEffect, useState } from "react";

import StatCard from "../../components/dashboard/StatCard";
import MapCard from "../../components/dashboard/MapCard";
import AIOverviewCard from "../../components/dashboard/AIOverviewCard";
import AlertList from "../../components/dashboard/AlertList";

import { getDashboardStats } from "../../services/dashboardService";

function Dashboard() {
  const [stats, setStats] = useState({
    totalEvents: 0,
    wildfires: 0,
    storms: 0,
    volcanoes: 0,
    floods: 0,
  });

  const [selectedEvent, setSelectedEvent] = useState(null);

  useEffect(() => {
    const loadDashboard = async () => {
      try {
        const data = await getDashboardStats();
        setStats(data);
      } catch (error) {
        console.error(error);
      }
    };

    loadDashboard();
  }, []);

  return (
    <div className="space-y-6">
      <h1 className="text-5xl font-bold text-red-500">
         🚀 THIS IS THE NEW DASHBOARD
      </h1>

      <div className="grid grid-cols-4 gap-6">
        <StatCard
          title="Active Events"
          value={stats.totalEvents}
          color="text-cyan-400"
        />

        <StatCard
          title="Wildfires"
          value={stats.wildfires}
          color="text-orange-400"
        />

        <StatCard
          title="Storms"
          value={stats.storms}
          color="text-blue-400"
        />

        <StatCard
          title="Volcanoes"
          value={stats.volcanoes}
          color="text-red-400"
        />
      </div>

      <div className="grid grid-cols-2 gap-6">
        <MapCard
            selectedEvent={selectedEvent}
            setSelectedEvent={setSelectedEvent}
        />

        <AIOverviewCard
            selectedEvent={selectedEvent}
        />
      </div>

      <AlertList />
    </div>
  );
}

export default Dashboard;