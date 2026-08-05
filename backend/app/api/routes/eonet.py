from fastapi import APIRouter
from app.services.eonet_service import get_live_events

router = APIRouter()


@router.get("/events")
def fetch_events():
    return get_live_events()