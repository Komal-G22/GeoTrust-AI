function AlertList() {
  return (
    <div className="bg-slate-900 rounded-xl p-6">
      <h2 className="text-xl font-semibold mb-4">
        Recent Alerts
      </h2>

      <ul className="space-y-3">
        <li>🔴 Flood Warning</li>
        <li>🟡 Sensor Conflict</li>
        <li>🟢 Weather Verified</li>
      </ul>
    </div>
  );
}

export default AlertList;