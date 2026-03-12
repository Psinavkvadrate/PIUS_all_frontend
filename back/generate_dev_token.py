from dotenv import load_dotenv
from pathlib import Path
import os
from jose import jwt

env_path = Path(__file__).resolve().parent / ".env"
load_dotenv(env_path)

SECRET_KEY = os.getenv("SECRET_KEY")
ALGORITHM = "HS256"

print("SECRET_KEY:", SECRET_KEY)

payload = {
    "sub": "a00000aa-0000-0a00-0aa0-a00a0a00000a"
}

token = jwt.encode(payload, SECRET_KEY, algorithm=ALGORITHM)

print(token)