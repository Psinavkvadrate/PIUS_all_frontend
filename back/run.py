from dotenv import load_dotenv
load_dotenv()

import uvicorn
import asyncio
import logging
import sys
from pathlib import Path

# Добавляем текущую папку в путь Python
sys.path.insert(0, str(Path(__file__).parent))

logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)-20s - %(levelname)-8s - %(message)s',
    datefmt='%H:%M:%S'
)

async def main():
    uvicorn.run(
        'src.app.application:get_app',
        host='0.0.0.0',
        port=8000,
        reload=True,
        factory=True
    )

if __name__ == '__main__':
    asyncio.run(main())