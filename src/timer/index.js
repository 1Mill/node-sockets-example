const http = require('http').createServer();
const io = require('socket.io')(http);
const redisAdapter = require('socket.io-redis');
io.adapter(redisAdapter({ host: 'redis-service', port: 6379 }));

const CLIENT_ID = 'hWr1s3jguGdEhs-TAAAD';

// * Emit event to everybody
setInterval(() => {
	io.emit('chat message', 'Everybody is getting this message...');
	io.to(CLIENT_ID).emit('chat message', 'THIS IS YOUR CUSTOM EVENT');
}, 5000);
