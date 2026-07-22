function AIOverviewCard() {
  return (
    <div className="bg-slate-900 rounded-xl h-96 p-6">
      <h2 className="text-xl font-semibold mb-4">
        AI Analysis
      </h2>

      <div className="space-y-4">
        <p>✅ Trust Score: 92%</p>
        <p>🛰️ 18 Sources Verified</p>
        <p>⚠️ 3 Potential Conflicts</p>
        <p>🤖 Gemini AI Ready</p>
      </div>
    </div>
  );
}

export default AIOverviewCard;