  /*This Source Code Form is subject to the terms of the Mozilla Public
  License, v. 2.0. If a copy of the MPL was not distributed with this
  file, You can obtain one at http://mozilla.org/MPL/2.0/.*/

const {app, BrowserWindow} = require('electron')
const path = require('path')

var win

function CreateWindow() {
    win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true
        },
        icon: path.join(__dirname, 'assets', 'icon-no-bg.ico')
    })

    win.loadFile('./views/Jaap.html')

    win.removeMenu()
}

app.whenReady().then(() => {
    CreateWindow()
})

app.on('window-all-closed', () => {
    if(process.platform !== 'darwin') {
        app.quit()
    }
})

app.on('activate', () => {
    if(BrowserWindow.getAllWindows().length === 0) {
        CreateWindow()
    }
})