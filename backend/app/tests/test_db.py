from app.db.database import engine


def test_db_connection():
    try:
        conn = engine.connect()
        print("DB Connected Successfully")
        conn.close()
    except Exception as e:
        print("DB Connection Failed")
        print(e)


if __name__ == "__main__":
    test_db_connection()