Write-Host "Setting up Portfolio Website Development Environment..." -ForegroundColor Green
Write-Host ""

Write-Host "Setting up Backend..." -ForegroundColor Yellow
Set-Location backend
Write-Host "Creating virtual environment..." -ForegroundColor Cyan
python -m venv venv
Write-Host "Activating virtual environment..." -ForegroundColor Cyan
.\venv\Scripts\Activate.ps1
Write-Host "Installing Python dependencies..." -ForegroundColor Cyan
pip install -r requirements.txt
Write-Host "Backend setup complete!" -ForegroundColor Green
Write-Host ""
Set-Location ..

Write-Host "Setting up Frontend..." -ForegroundColor Yellow
Set-Location frontend
Write-Host "Installing Node.js dependencies..." -ForegroundColor Cyan
npm install
Write-Host "Frontend setup complete!" -ForegroundColor Green
Write-Host ""
Set-Location ..

Write-Host ""
Write-Host "========================================" -ForegroundColor Magenta
Write-Host "Setup Complete!" -ForegroundColor Green
Write-Host "========================================" -ForegroundColor Magenta
Write-Host ""
Write-Host "To start development:" -ForegroundColor Yellow
Write-Host ""
Write-Host "1. Start Backend (in one terminal):" -ForegroundColor Cyan
Write-Host "   cd backend" -ForegroundColor White
Write-Host "   .\venv\Scripts\Activate.ps1" -ForegroundColor White
Write-Host "   python app.py" -ForegroundColor White
Write-Host ""
Write-Host "2. Start Frontend (in another terminal):" -ForegroundColor Cyan
Write-Host "   cd frontend" -ForegroundColor White
Write-Host "   npm start" -ForegroundColor White
Write-Host ""
Write-Host "Backend will run on: http://localhost:5000" -ForegroundColor Green
Write-Host "Frontend will run on: http://localhost:3000" -ForegroundColor Green
Write-Host ""
Read-Host "Press Enter to continue"
