const EventEmitter = require('events')

var eventEmitter = new EventEmitter()

eventEmitter.on('myEvt', (msg)=>{
    console.log(msg)
})

eventEmitter.emit('myEvt', 'Hii Brother')