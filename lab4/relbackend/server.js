const path = require('path');
const express = require('express');
const app = express();
const axios = require('axios');

app.use(express.static(path.join(__dirname, '../frontend/lab4/dist/lab4')));

app.use(express.static('public'));
app.get('/', (req, res) => {
	res.sendFile(__dirname + '/index.html');
});

app.get('/generate', (req, res) => {
    console.log("/generate endpint called");
    
    axios.get('https://api.fisenko.net/v1/quotes/en/random')
    .then(function (response) {
        res.send(response.data);

    })
    .catch(function (error) {
        console.log(error);
    });
    
});

app.get('/scheme', (req, res) => {
    axios.get('http://palett.es/API/v1/palette')
        .then(function (response) {
            console.log(response.data);
            res.send(response.data);
        })
        .catch(function (error) {
            console.log(error);
        });
})
const port = process.env.PORT || 3000;
app.listen(port, () => {
	console.log('Listening on *:'+port)
})
