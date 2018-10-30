var {ipcRenderer, remote} = require('electron')
var fs = require('fs')

input = document.getElementById('input')
log = document.getElementById('log')

window.addEventListener('focus', () => {
    input.focus()
})

window.addEventListener('keydown', (event) => {
    if (event.key == 'Enter' && input.value.length > 0) {
        const msg = new Date().toTimeString() + ': ' + input.value
        fs.appendFileSync(remote.getGlobal('logdir') + '/worklog.txt', msg + '\n');
        log.innerHTML = msg + '<br>' + log.innerHTML
        input.value = ''
    }    
})

input.focus()
