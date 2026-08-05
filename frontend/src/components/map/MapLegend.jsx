export default function MapLegend() {
  return (
    <div className="absolute bottom-4 right-4 z-[1000] w-48 rounded-xl bg-white/95 p-4 shadow-xl backdrop-blur-sm">
      <h3 className="mb-3 text-sm font-bold text-gray-800">
        🗺️ Map Legend
      </h3>

      <div className="space-y-3 text-sm text-gray-700">
        <div className="flex items-center gap-3">
          <span className="h-3 w-3 rounded-full bg-green-500"></span>
          <span>Verified</span>
        </div>

        <div className="flex items-center gap-3">
          <span className="h-3 w-3 rounded-full bg-red-500"></span>
          <span>Conflict</span>
        </div>

        <div className="flex items-center gap-3">
          <span className="h-3 w-3 rounded-full bg-blue-500"></span>
          <span>Weather</span>
        </div>

        <div className="flex items-center gap-3">
          <span className="h-3 w-3 rounded-full bg-purple-500"></span>
          <span>Satellite</span>
        </div>
      </div>
    </div>
  );
}