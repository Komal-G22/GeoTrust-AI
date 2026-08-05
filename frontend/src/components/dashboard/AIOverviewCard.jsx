import { useEffect, useState } from "react";
import { getTrustScore } from "../../services/trustService";

function AIOverviewCard() {
  const [trust, setTrust] = useState({
    trust_score: 0,
    source_verified: false,
    coordinates_valid: false,
    weather_verified: false,
    satellite_verified: false,
    gemini_verified: false,
  });

  useEffect(() => {
    const loadTrust = async () => {
      try {
        // Temporary: use a fixed event ID
        const data = await getTrustScore("EONET_21600");
        setTrust(data);
      } catch (error) {
        console.error("Failed to load trust score:", error);
      }
    };

    loadTrust();
  }, []);

  return (
    <div className="bg-slate-900 rounded-xl h-96 p-6">
      <h2 className="text-xl font-semibold mb-6">
        🤖 AI Analysis
      </h2>

      <div className="space-y-4 text-sm">

        <div className="text-3xl font-bold text-green-400">
          {trust.trust_score}%
        </div>

        <p>
          {trust.source_verified
            ? "✅ NASA Verified"
            : "❌ NASA Not Verified"}
        </p>

        <p>
          {trust.coordinates_valid
            ? "✅ Coordinates Valid"
            : "❌ Invalid Coordinates"}
        </p>

        <p>
          {trust.weather_verified
            ? "✅ Weather Verified"
            : "⏳ Weather Pending"}
        </p>

        <p>
          {trust.satellite_verified
            ? "✅ Satellite Verified"
            : "⏳ Satellite Pending"}
        </p>

        <p>
          {trust.gemini_verified
            ? "✅ Gemini Consistent"
            : "⏳ Gemini Pending"}
        </p>

      </div>
    </div>
  );
}

export default AIOverviewCard;