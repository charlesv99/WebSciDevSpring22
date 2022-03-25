const path = require('path');
const express = require('express');
const app =express();
const axios = require('axios');
const { MongoClient, ServerApiVersion } = require('mongodb');


app.use(express.static(path.join(__dirname, '../frontend/lab5/dist/lab5')));

const uri = "mongodb+srv://lab5:spring22@lab5.taxac.mongodb.net/Lab5?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect(err => {
  const collection = client.db("Lab5").collection("100Quotes");
    // console.log(collection);
  client.close();
});

app.get('/generate', (req, res) => {
    
    axios.get('https://api.fisenko.net/v1/quotes/en/random')
    .then(function (response) {
        res.send(response.data);

    })
    .catch(function (error) {
        console.log(error);
    });
    
});

app.get('/generate100', (req, res) => {
    
    axios.get('https://api.fisenko.net/v1/quotes/en/?limit=100/')
    .then(function (response) {
        console.log(response.data);
        res.send(response.data);
    });
    
});

app.get('/scheme', (req, res) => {
        var letters = '0123456789ABCDEF'.split('');
        var color = '';
        for (var i = 0; i < 6; i++ ) {
          color += letters[Math.floor(Math.random() * 16)];
        }

    axios.get('https://www.thecolorapi.com/scheme?hex='+color.toString()+'&format=json&mode=complement&count=2')
        .then(function (response) {
            console.log(response.data);
            res.send(response.data);
        })
        .catch(function (error) {
            console.log(error);
        });
})

app.listen(3000, (req, res) =>{
    console.log('Lab5 is running at port 3000');
})