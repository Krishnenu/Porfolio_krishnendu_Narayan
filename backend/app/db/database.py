from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker, DeclarativeBase
from urllib.parse import quote_plus


params = quote_plus(
    "DRIVER={ODBC Driver 17 for SQL Server};"
    "SERVER=(localdb)\\MSSQLLocalDB;"
    "DATABASE=PortfolioDB;"
    "Trusted_Connection=yes;"
)

DATABASE_URL = f"mssql+pyodbc:///?odbc_connect={params}"

engine = create_engine(
    DATABASE_URL,
    echo=True
)

SessionLocal = sessionmaker(
    autocommit=False,
    autoflush=False,
    bind=engine
)


class Base(DeclarativeBase):
    pass


