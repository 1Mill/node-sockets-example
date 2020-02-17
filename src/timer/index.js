const http = require('http').createServer();
const io = require('socket.io')(http);
const redisAdapter = require('socket.io-redis');
io.adapter(redisAdapter({ host: 'redis-service', port: 6379 }));

setInterval(() => {
	console.log('...')
	io.emit('chat message', 'TESTING');
}, 3000);
