import { useEffect, useState } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMap,
} from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

import { getEvents } from "../../services/eonetService";

// Fix default Leaflet marker icons
delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

// Automatically fit map to all events
function FitBounds({ events }) {
  const map = useMap();

  useEffect(() => {
    if (events.length === 0) return;

    const bounds = L.latLngBounds(
      events.map((event) => [event.latitude, event.longitude])
    );

    map.fitBounds(bounds, {
      padding: [60, 60],
      maxZoom: 4,
    });
  }, [events, map]);

  return null;
}

export default function MapView({
  selectedEvent,
  setSelectedEvent,
}) {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        console.log("🚀 Fetching NASA Events...");

        const data = await getEvents();

        console.log("✅ NASA Events:", data);

        setEvents(data);
      } catch (err) {
        console.error("❌ Error loading NASA events:", err);

        if (err.response) {
          console.log("Status:", err.response.status);
          console.log("Response:", err.response.data);
        } else if (err.request) {
          console.log("No response received");
        } else {
          console.log("Message:", err.message);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  return (
    <>
      <div className="text-white text-sm mb-2 font-semibold">
        🌍 Events Loaded: {events.length}
      </div>

      <MapContainer
        center={[20, 0]}
        zoom={2}
        scrollWheelZoom
        zoomControl
        className="rounded-xl"
        style={{
          height: "100%",
          width: "100%",
        }}
      >
        <TileLayer
          attribution="&copy; OpenStreetMap contributors"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <FitBounds events={events} />

        {!loading &&
          events.map((event) => (
            <Marker
              key={event.id}
              position={[event.latitude, event.longitude]}
              eventHandlers={{
                click: () => {
                  setSelectedEvent(event);
                },
              }}
            >
              <Popup autoPan={true}>
                <div className="min-w-[260px] space-y-2">
                  <h2 className="text-lg font-bold">
                    🌍 {event.title}
                  </h2>

                  <hr />

                  <p>
                    <strong>Category:</strong> {event.category}
                  </p>

                  <p>
                    <strong>Source:</strong> {event.source}
                  </p>

                  <p>
                    <strong>Date:</strong>
                    <br />
                    {new Date(event.date).toLocaleString()}
                  </p>

                  <p>
                    <strong>Latitude:</strong>{" "}
                    {event.latitude.toFixed(4)}
                  </p>

                  <p>
                    <strong>Longitude:</strong>{" "}
                    {event.longitude.toFixed(4)}
                  </p>
                </div>
              </Popup>
            </Marker>
          ))}
      </MapContainer>
    </>
  );
}