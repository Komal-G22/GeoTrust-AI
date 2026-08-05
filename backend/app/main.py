from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.api.routes.eonet import router as eonet_router
from app.api.routes import trust

app = FastAPI(
    title="GeoTrust AI API",
    description="AI-powered Geospatial Intelligence Platform",
    version="1.0.0",
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",
        "http://localhost:5174",
        "http://127.0.0.1:5173",
        "http://127.0.0.1:5174",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# NASA EONET
app.include_router(
    eonet_router,
    prefix="/api/eonet",
    tags=["NASA EONET"]
)

# Trust API
app.include_router(
    trust.router,
    prefix="/api"
)

@app.get("/")
async def root():
    return {
        "project": "GeoTrust AI",
        "status": "Running 🚀",
        "version": "1.0.0"
    }

@app.get("/health")
async def health():
    return {
        "status": "healthy"
    }