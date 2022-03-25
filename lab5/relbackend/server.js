const path = require('path');
const express = require('express');
const app =express();
const axios = require('axios');
const { MongoClient, ServerApiVersion } = require('mongodb');
var database

app.use(express.static(path.join(__dirname, '../frontend/lab5/dist/lab5')));

async function main() {
    const uri = "mongodb+srv://cmv:palermo@lab5.taxac.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
    const client = new MongoClient(uri);

    try{
        await client.connect();
        console.log("connected")
        // for(let i=1;i<=100;i++){
        //     await addQuote(client, {
        //         _id:i,
        //         text:"response.data.text",
        //         author:"response.data.author.name"
        //     });
        // }
        await listQuotes(client);
    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
    }
}

main().catch(console.error);

async function addQuote(client, newQuote) {
    const result = await client.db("LAB5").collection("quotes").insertOne(newQuote);
    console.log('hello-'+result.insertedId);
}

async function fillQuotes(client) {
    for(let i=1;i<=3;i++){
        axios.get('https://api.fisenko.net/v1/quotes/en/random')
        .then(function (response) {
            addQuote(client, {
                id:i,
                text:response.data.text,
                author:response.data.author.name
            });
        });
    }
}

async function listQuotes(client) {
    const quotesList = await client.db("LAB5").collection("quotes").find();
    console.log(quotesList);

    console.log("quotes:");
    databasesList.databases.forEach(db => {
        console.log('- '+db.name);
    })
}
app.get('/db', (req, res) => {
    listQuotes(client);
})

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
    console.log('Lab5 is running at port 3000');
})