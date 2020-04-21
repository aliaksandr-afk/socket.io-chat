const express = require('express');
const useSocket = require('socket.io');

const app = express();
const server = require('http').Server(app);
const io = useSocket(server);

const rooms = new Map([
    []
]);

app.get('/users',(req, res) => {
    rooms.set()
    res.json(rooms);
});

io.on('connection', socket => {
    console.log('socket connected', socket.id);
})

server.listen(8888, (err) => {
    if(err) {
        throw Error(err);
    }
    console.log('Server is running on port 8888')
});