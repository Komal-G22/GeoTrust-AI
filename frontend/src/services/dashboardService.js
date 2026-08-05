import { getEvents } from "./eonetService";

export const getDashboardStats = async () => {
  const events = await getEvents();

  console.log("Dashboard Events:", events);

  return {
    totalEvents: events.length,

    wildfires: events.filter(
      (e) => e.category === "Wildfires"
    ).length,

    storms: events.filter(
      (e) => e.category === "Severe Storms"
    ).length,

    volcanoes: events.filter(
      (e) => e.category === "Volcanoes"
    ).length,

    floods: events.filter(
      (e) => e.category === "Floods"
    ).length,

    events,
  };
};