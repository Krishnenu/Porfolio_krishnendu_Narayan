from app.db.database import engine, Base
from app.models import models   # important: import models first

def init_db():
    Base.metadata.create_all(bind=engine)