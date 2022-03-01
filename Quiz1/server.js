const express = require('express');
const app = express();
const axios = require('axios');

app.use(express.static('public'));
app.get('/', (req, res) => {
	res.sendFile(__dirname + '/index.html');
});
app.get('/temperature', (req, res) => {
    console.log("/generate endpint called");

    
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
	console.log('Listening on *:'+port)
})
