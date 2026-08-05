from fastapi import APIRouter

from app.services.eonet_service import get_live_events
from app.services.trust_service import TrustService

router = APIRouter(
    prefix="/trust",
    tags=["Trust"],
)

@router.get("/{event_id}")
async def get_trust_score(event_id: str):

    events = get_live_events()

    event = next(
        (e for e in events if e["id"] == event_id),
        None,
    )

    if event is None:
        return {
            "error": "Event not found"
        }

    return TrustService.calculate(event)