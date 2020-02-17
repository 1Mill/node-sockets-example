const http = require('http').createServer();
const io = require('socket.io')(http);
const redisAdapter = require('socket.io-redis');
io.adapter(redisAdapter({ host: 'redis-service', port: 6379 }));

// * Emit event to everybody
setInterval(() => {
	io.emit('chat message', 'Everybody is getting this message...');
}, 5000);

io.on('connection', (socket) => {
	console.log(socket)
})
