from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from .routes import auth, pdf, ai

app = FastAPI(title="ResuMatch AI API")

# Configure CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Allow all origins during development
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Include routers
app.include_router(auth.router, prefix="/auth", tags=["auth"])
app.include_router(pdf.router, prefix="/pdf", tags=["pdf"])
app.include_router(ai.router, prefix="/ai", tags=["ai"])

@app.get("/")
async def root():
    return {"message": "Welcome to ResuMatch AI API"}