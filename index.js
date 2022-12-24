const io = require('socket.io')(8800, {
    cors: {
        origin: "http://yoduyouhou.tk"
    }
})

// Socket init and sending msg to client
io.on('connection', (socket) => {
    socket.on("setdata", (arg) => {
        io.emit('sentToAdmin', arg)
    })
})



