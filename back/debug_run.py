import os
import sys
from pathlib import Path

# Добавляем пути
ROOT_DIR = Path(__file__).parent
sys.path.insert(0, str(ROOT_DIR))
sys.path.insert(0, str(ROOT_DIR / 'src'))

# Загружаем .env вручную
from dotenv import load_dotenv
load_dotenv()

# Принудительно устанавливаем правильный URL
os.environ['POSTGRES_URL'] = 'postgresql+asyncpg://postgres:10072005@localhost:5432/logReg'

import uvicorn
import logging

logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)-20s - %(levelname)-8s - %(message)s',
    datefmt='%H:%M:%S'
)

if __name__ == '__main__':
    uvicorn.run(
        'src.app.application:get_app',
        host='0.0.0.0',
        port=8000,
        reload=False,  # Отключаем reload для отладки
        factory=True
    )