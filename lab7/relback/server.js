const path = require('path');
const express = require('express');
const axios = require('axios');
const bodyParser = require('body-parser')
const https = require('https')
const fs =  require('fs')
const app =express();

app.use(express.static(path.join(__dirname, '../front/lab7/dist/lab7')));

const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://cmv:palermo@lab5.taxac.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri);

const cors = require('cors');
app.use(cors({
    origin: '*'
}));
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());


app.get('/db', (req, res) => {
    client.connect(err => {
        const collection = client.db("LAB5").collection("quoteslab6");
        const items = collection.find({}).toArray();
        items.then((result) => { 
            client.close();
            res.send(result);
        })
    })
});

app.post('/db', (req,res)=> {
    client.connect(err => {
        const collection = client.db("LAB5").collection("quoteslab6");
        collection.insertOne(req.body);
    })
    res.send({"msg": "200"});
});

app.get('/db/:number', (req, res) => {
    client.connect(err => {
        const collection = client.db("LAB5").collection("quoteslab6");
        const items = collection.find({"_id":req.params.number}).toArray();
        items.then((result) => { 
            client.close();
            res.send(result);
        })
    })
});

app.post('/db/:number', (req, res) => {
    res.status(404);
    res.send({"msg": "404"});
});

app.put('/db/:number', (req, res) => {
    client.connect(err => {
        const collection = client.db("LAB5").collection("quoteslab6");
        const filter = {"_id": req.params.number};
        const newDoc = {$set: req.body};
        collection.updateMany(filter, newDoc, {upsert: false})
        .then((result) => {
            if(result["matchedCount"] == 0) {
                res.status(404);
                res.send({"msg": "404"});
            }
            else {
                res.send({"msg": "200"});
            }
        })
    })
});

app.delete('/db/:number', (req, res) => {
    client.connect(err => {
        const collection = client.db("LAB5").collection("quoteslab6");
        const filter = {"_id": req.params.number};
        collection.deleteMany(filter, (errr, obj) => {
            if(errr)
                throw errr;
            if(obj.deletedCount == 0) {
                res.status(404);
                res.send({"msg": "404"});
            }
            else {
                res.send({"msg": "200"});
            }
        })
    })
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


app.get('/scheme', (req, res) => {
        var letters = '0123456789ABCDEF'.split('');
        var color = '';
        for (var i = 0; i < 6; i++ ) {
          color += letters[Math.floor(Math.random() * 16)];
        }

    axios.get('https://www.thecolorapi.com/scheme?hex='+color.toString()+'&format=json&mode=complement&count=2')
        .then(function (response) {
            res.send(response.data);
        })
        .catch(function (error) {
            console.log(error);
        });
})

app.listen(3000, (req, res) =>{
    console.log('Lab7 is running at port 3000');
})