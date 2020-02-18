const http = require('http').createServer();
const io = require('socket.io')(http);
const redisAdapter = require('socket.io-redis');
io.adapter(redisAdapter({ host: 'redis', port: 6379 }));

io.on('connect', (socket) => {
	console.log('A user connected');

	socket.on('disconnect', () => {
		console.log('A user disconnected');
	});
});
