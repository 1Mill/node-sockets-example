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
})

http.listen(PORT, () => {
	console.log(`listening on *:${PORT}`);
});
