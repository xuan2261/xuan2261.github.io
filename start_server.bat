@echo off
echo Starting R1 Control Local Server...
echo.
echo Server will run at http://localhost:8000
echo.
echo Press Ctrl+C to stop the server when done
echo.
python -m http.server 8000
pause
