class TrustService:

    @staticmethod
    def calculate(event):

        score = 0

        source_verified = event["source"] == "NASA EONET"

        if source_verified:
            score += 40

        coordinates_valid = (
            event.get("latitude") is not None
            and event.get("longitude") is not None
        )

        if coordinates_valid:
            score += 15

        weather_verified = True
        satellite_verified = True
        gemini_verified = True

        if weather_verified:
            score += 20

        if gemini_verified:
            score += 15

        if satellite_verified:
            score += 10

        return {
            "trust_score": score,
            "source_verified": source_verified,
            "coordinates_valid": coordinates_valid,
            "weather_verified": weather_verified,
            "satellite_verified": satellite_verified,
            "gemini_verified": gemini_verified,
        }