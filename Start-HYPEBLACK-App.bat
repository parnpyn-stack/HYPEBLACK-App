@echo off
title HYPEBLACK Luxury App Launcher
cls
echo ========================================================
echo       HYPEBLACK LUXURY & STREETWEAR APP LAUNCHER
echo ========================================================
echo.

cd /d "D:\Dating-app-1"

:: Start the background server on all network interfaces
netstat -ano | findstr :3000 >nul
if %errorlevel% neq 0 (
    echo [1/2] Starting server on 0.0.0.0:3000...
    start /b powershell -ExecutionPolicy Bypass -WindowStyle Hidden -File "D:\Dating-app-1\serve.ps1"
    timeout /t 2 >nul
) else (
    echo [1/2] Server is already active on port 3000!
)

echo.
echo [2/2] Your App Access URLs:
echo --------------------------------------------------------
echo  Computer (Localhost): http://localhost:3000/
echo  Mobile / Wi-Fi IP:    http://192.168.1.55:3000/
echo  Phone Simulator:      http://localhost:3000/mobile.html
echo --------------------------------------------------------
echo.
echo Launching standalone mobile app window...

if exist "C:\Program Files\Google\Chrome\Application\chrome.exe" (
    start "" "C:\Program Files\Google\Chrome\Application\chrome.exe" --app="http://localhost:3000/index.html" --window-size=420,900
) else (
    start http://localhost:3000/index.html
)

echo Done! Keep this or minimize it.
exit
