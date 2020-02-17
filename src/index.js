const app = require('express')();
const http = require('http').createServer(app);

const HTTP_FILE = __dirname + '/index.html';
const PORT = process.env.PORT;

app.get('/', (req, res) => {
	res.sendFile(HTTP_FILE);
});
http.listen(PORT, () => {
	console.log(`listening on *:${PORT}`);
});
