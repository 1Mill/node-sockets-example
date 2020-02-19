const http = require('http').createServer();
const io = require('socket.io')(http);
const redisAdapter = require('socket.io-redis');
io.adapter(redisAdapter({ host: 'redis', port: 6379 }));

io.on('connect', (socket) => {
	console.log('A user connected');

	socket.on('chat message', (msg) => {
		io.emit('chat message', msg);
	});

	socket.on('disconnect', () => {
		console.log('A user disconnected');
	});
});
http.listen(process.env.PORT, () => {
	console.log(`listening on *:${process.env.PORT}`);
})
