import MapView from "../map/MapView";
import MapLegend from "../map/MapLegend";

export default function MapCard({
  selectedEvent,
  setSelectedEvent,
}) {
  return (
    <div className="bg-[#111827] rounded-xl shadow-lg p-5">
      <h2 className="text-xl font-semibold text-white mb-4">
        🌍 Geospatial Map
      </h2>

      <div className="relative h-[500px] overflow-hidden rounded-xl">
        <MapView
          selectedEvent={selectedEvent}
          setSelectedEvent={setSelectedEvent}
        />

        <MapLegend />
      </div>
    </div>
  );
}