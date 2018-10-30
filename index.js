const { app, BrowserWindow, Menu, MenuItem } = require('electron')
  
function createWindow () {
    // Create the browser window.
    win = new BrowserWindow({ width: 600, height: 400, icon: __dirname + '/contents/img/activity.png',
                              backgroundColor: '#FFEFD5', title: 'Taskmaster' })
    
    // and load the index.html of the app.
    win.loadFile(__dirname + '/contents/index.html')
    win.setMenu(Menu.buildFromTemplate([
        {
            label: 'Menu',
            submenu: [
                { label: 'Quit', accelerator: 'CommandOrControl+Q', click: () => {
                    win.close()
                    win = null
                }}
            ]
        }
    ]));
}

app.on('ready', createWindow)
global.logdir = __dirname
