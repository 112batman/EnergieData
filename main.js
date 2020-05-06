  /*This Source Code Form is subject to the terms of the Mozilla Public
  License, v. 2.0. If a copy of the MPL was not distributed with this
  file, You can obtain one at http://mozilla.org/MPL/2.0/.*/

const {app, BrowserWindow, Menu, MenuItem} = require('electron')
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

    win.loadFile('./views/Index2.html')
}

var menu = new Menu()
var help = new MenuItem({
    click: function() {
        const path = require('path')

        var win = new BrowserWindow({
            width: 800,
            height: 600,
            icon: path.join(__dirname, 'assets', 'icon-no-bg.ico')
        })
    
        win.loadURL('https://112batman.gitbook.io/energiedata/')
    },
    label: 'Help'
})

var trello = new MenuItem({
    click: function() {
        const path = require('path')

        var win = new BrowserWindow({
            width: 800,
            height: 600,
            icon: path.join(__dirname, 'assets', 'icon-no-bg.ico')
        })
    
        win.loadURL('https://trello.com/b/GknEE04Z/energiedata')
    },
    label: 'Trello'
})

var github = new MenuItem({
    click: function() {
        const path = require('path')

        var win = new BrowserWindow({
            width: 800,
            height: 600,
            icon: path.join(__dirname, 'assets', 'icon-no-bg.ico')
        })
    
        win.loadURL('https://github.com/112batman/EnergieData')
    },
    label: 'Github'
})

Menu.setApplicationMenu(menu)
menu.append(help)
menu.append(trello)
menu.append(github)

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