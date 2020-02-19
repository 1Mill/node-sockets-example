const app = require('express')();
const http = require('http').createServer(app);
const io = require('socket.io')(http);
const redisAdapter = require('socket.io-redis');

io.adapter(redisAdapter({ host: 'redis', port: 6379 }));

app.get('/', (req, res) => {
	res.sendFile(__dirname + '/index.html');
});
http.listen(process.env.PORT, () => {
	console.log(`listening on *:${process.env.PORT}`);
});
