const express = require('express');
const app = express();
const axios = require('axios');

app.get('/', (req, res) => {
	res.sendFile(__dirname + '/index.html');
});

app.get('/generate', async (req, res) => {
    let quote = '';
    let author = '';
    let hex='';
    console.log("/generate endpint called");
    
    axios.get('https://api.fisenko.net/v1/quotes/en/random')
    .then(function (response) {
        quote = response.data.text;
        author = response.data.author.name;
    })
    .catch(function (error) {
        console.log(error);
    });
    console.log(quote);
    axios.get('http://palett.es/API/v1/palette')
    .then(function (response) {
        hex = response.data;
        console.log(hex);
        console.log(hex[0]);
    })
    .catch(function (error) {
        console.log(error);
    });
    


});

const port = process.env.PORT || 3000;
app.listen(port, () => {
	console.log('Listening on *:'+port)
})
