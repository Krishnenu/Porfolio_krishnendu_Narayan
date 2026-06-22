from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.api import portfolio
from app.db.init_db import init_db

app = FastAPI(title="Portfolio API")

# Configure CORS
origins = [
    "http://localhost:3000",
    "http://127.0.0.1:3000",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

init_db()

app.include_router(portfolio.router)