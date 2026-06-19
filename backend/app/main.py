from fastapi import FastAPI
from app.routes import portfolio
from app.db.init_db import init_db

app = FastAPI(title="Portfolio API")

init_db()

app.include_router(portfolio.router)