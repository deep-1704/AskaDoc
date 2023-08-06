require('dotenv').config(); 

let express = require('express');
let { MongoClient } = require('mongodb');

let uri = process.env.MongoConnectionString;
let router = express.Router();
let client = new MongoClient(uri);

router.get('/:username',async (req,res) => {
    let database = client.db('users');
    let coll = database.collection('ChatDB');

    let username = req.params.username;

    let data = await coll.findOne({username:username});

    res.send(data.conversations);
})  

router.post('/:username/addUser',async (req,res) => {
    let username = req.body.username;
    let docUsername = req.params.username;
    let database = client.db('users');
    let coll = database.collection('ChatDB');

    await coll.updateOne({username:docUsername},{$pull : {conversations : username},$push :{conversations : username}});
})

module.exports = router;