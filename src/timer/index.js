const http = require('http').createServer();
const io = require('socket.io')(http);
const redisAdapter = require('socket.io-redis');
io.adapter(redisAdapter({ host: 'redis', port: 6379 }));

const CLIENT_ID = 'dCHDfpEFlXibXrIDAAAA';

// * Emit event to everybody
setInterval(() => {
	io.emit('chat message', 'Everybody is getting this message...');
	io.to(CLIENT_ID).emit('chat message', 'THIS IS YOUR CUSTOM EVENT');
}, 5000);
