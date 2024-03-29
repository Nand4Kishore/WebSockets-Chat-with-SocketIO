var app = require('express')();
var http = require('http').createServer(app);
var socketio = require('socket.io')(http);

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

socketio.on('connection', (socket) => {
    socket.on('chat message', (msg) => {
        socketio.emit('chat message', msg);
    });
});

http.listen(3000, () => {
  console.log('listening on *:3000');
});