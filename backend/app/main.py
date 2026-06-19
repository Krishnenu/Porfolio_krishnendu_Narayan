from fastapi import FastAPI
from app.routes import portfolio


app = FastAPI(title="Portfolio API")

app.include_router(portfolio.router)