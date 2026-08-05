import requests

EONET_URL = "https://eonet.gsfc.nasa.gov/api/v3/events"


def get_live_events(limit=20):
    response = requests.get(EONET_URL, timeout=10)
    response.raise_for_status()

    data = response.json()

    events = []

    for event in data.get("events", [])[:limit]:
        geometry = event.get("geometry", [])

        if not geometry:
            continue

        latest = geometry[-1]

        coordinates = latest.get("coordinates", [])

        # Point events only
        if len(coordinates) != 2:
            continue

        lon, lat = coordinates

        events.append({
            "id": event.get("id"),
            "title": event.get("title"),
            "category": event.get("categories", [{}])[0].get("title"),
            "date": latest.get("date"),
            "latitude": lat,
            "longitude": lon,
            "source": "NASA EONET"
        })

    return events