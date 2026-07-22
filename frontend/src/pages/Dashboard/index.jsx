import StatCard from "../../components/dashboard/StatCard";
import MapCard from "../../components/dashboard/MapCard";
import AIOverviewCard from "../../components/dashboard/AIOverviewCard";
import AlertList from "../../components/dashboard/AlertList";

function Dashboard() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">
        Dashboard
      </h1>

      <div className="grid grid-cols-4 gap-6">
        <StatCard
          title="Trust Score"
          value="92%"
          color="text-cyan-400"
        />

        <StatCard
          title="Sources"
          value="18"
        />

        <StatCard
          title="Alerts"
          value="3"
          color="text-red-400"
        />

        <StatCard
          title="Reports"
          value="24"
        />
      </div>

      <div className="grid grid-cols-2 gap-6">
        <MapCard />

        <AIOverviewCard />
      </div>

      <AlertList />
    </div>
  );
}

export default Dashboard;