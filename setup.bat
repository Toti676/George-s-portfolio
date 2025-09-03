@echo off
echo Setting up Portfolio Website Development Environment...
echo.

echo Setting up Backend...
cd backend
echo Creating virtual environment...
python -m venv venv
echo Activating virtual environment...
call venv\Scripts\activate
echo Installing Python dependencies...
pip install -r requirements.txt
echo Backend setup complete!
echo.
cd ..

echo Setting up Frontend...
cd frontend
echo Installing Node.js dependencies...
npm install
echo Frontend setup complete!
echo.
cd ..

echo.
echo ========================================
echo Setup Complete!
echo ========================================
echo.
echo To start development:
echo.
echo 1. Start Backend (in one terminal):
echo    cd backend
echo    venv\Scripts\activate
echo    python app.py
echo.
echo 2. Start Frontend (in another terminal):
echo    cd frontend
echo    npm start
echo.
echo Backend will run on: http://localhost:5000
echo Frontend will run on: http://localhost:3000
echo.
pause
