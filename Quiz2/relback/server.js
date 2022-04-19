const path = require('path');
const express = require('express');
const axios = require('axios');
const bodyParser = require('body-parser');
const https = require('https');
const fs =  require('fs');
const app =express();
const cors = require('cors');

app.use(express.static(path.join(__dirname, '../front/quiz2/dist/quiz2')));
app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(bodyParser.json());
app.use(cors({
    origin: '*'
}));



const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://cmv:palermo@lab5.taxac.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri);
const collection = client.db("LAB5").collection("quiz2");

app.get('/mongo', (req, res) => {
  client.connect(err => {
      const items = collection.aggregate().toArray();
      items.then((result) => { 
          client.close();
          res.send(result);
      })
  })
});

app.get('/mongo/:number', (req, res) => {
  client.connect(err => {
      const items = collection.find({"_id": req.params.number}).toArray();
      items.then((result) => { 
          client.close();
          res.send(result);
      })
  })
});

app.post('/mongo', (req, res) => {
	console.log(req.body);
    client.connect(err => {
        collection.insertOne(req.body);
    })
    res.send({"msg": "Done"});
});

app.post('/mongo/:number', (req, res) => {
    res.status(404);
    res.send({"msg": "ERROR"});
});

app.put('/mongo', (req, res) => {
  client.connect(err => {
      const filter = {"_id": req.params.number};
      const newDoc = {$set: req.body};
      collection.updateMany(filter, newDoc, {upsert: false})
      .then((result) => {
          if(result["matchedCount"] == 0) {
              res.status(404);
              res.send({"msg": "ERROR"});
          }
          else {
              res.send({"msg": "Updated"});
          }
      })
  })
});

app.put('/mongo/:number', (req, res) => {
    client.connect(err => {
        const filter = {"_id": req.params.number};
        const newDoc = {$set: req.body};
        collection.updateMany(filter, newDoc, {upsert: false})
        .then((result) => {
            if(result["matchedCount"] == 0) {
                res.status(404);
                res.send({"msg": "ERROR"});
            }
            else {
                res.send({"msg": "Updated"});
            }
        })
    })
});

app.delete('/mongo', (req, res) => {
  client.connect(err => {
    collection.drop(function(err, delOK) {
      if (err) throw err;
      if (delOK) console.log("Collection deleted");
      client.close();
    });
  })
});

app.delete('/mongo/:number', (req, res) => {
    client.connect(err => {
        const filter = {"_id": req.params.number};
        collection.deleteMany(filter, (err2, obj) => {
            if(err2)
                throw err2;
            if(obj.deletedCount == 0) {
                res.status(404);
                res.send({"msg": "ERROR"});
            }
            else {
                res.send({"msg": "Deleted"});
            }
        })
    })
});

app.listen(3000, () => {
  console.log('Listening on *:3000');
});
