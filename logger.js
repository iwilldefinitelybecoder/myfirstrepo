const EventEmitter = require('events')


let url = 'http://mylogger.io/log';

class logger extends EventEmitter{
      log(message)
    {
        console.log(message);
    

    //raise an event
    this.emit('abhichandra',{id:1 , url:'http://'})
    }
}


module.exports = logger;
