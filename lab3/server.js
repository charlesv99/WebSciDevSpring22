const express = require('express');
const app = express()
const fetch = require('node-fetch');

app.get('/', (req, res) => {
	res.sendFile(__dirname + '/index.html');
})

app.get('/generate', (req, res) => {
    console.log("/generate endpint called");
})

const port = process.env.PORT || 3000;
app.listen(port, () => {
	console.log('Listening on *:'+port)
})
