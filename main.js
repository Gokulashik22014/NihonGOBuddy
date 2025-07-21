import { app, BrowserWindow } from 'electron';
import path from 'path';
import { exec } from 'child_process';

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1200,
    height: 800,
    webPreferences: {
      contextIsolation: true,
    }
  });

  // Open local server served by backend
  mainWindow.loadURL('http://localhost:3001');
  // mainWindow.webContents.openDevTools();
}
/*if you again face an issue with not loading try running and serving the front end and backend separately*/ 
app.whenReady().then(() => {
  // Start backend server
  exec('node ./backend/server.js', (err, stdout, stderr) => {
    if (err) console.error("Backend error:", err);
  });

  createWindow();
});
