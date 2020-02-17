const app = require('express')();
const http = require('http').createServer(app);
const io = require('socket.io')(http);

const HTTP_FILE = __dirname + '/index.html';
const PORT = process.env.PORT;

app.get('/', (req, res) => {
	res.sendFile(HTTP_FILE);
});

io.on('connection', (socket) => {
	console.log('A user connected');

	socket.on('chat message', (msg) => {
		io.emit('chat message', msg);
	});

	socket.on('disconnect', function () {
		console.log('A user disconnected');
	});
})

http.listen(PORT, () => {
	console.log(`listening on *:${PORT}`);
});
