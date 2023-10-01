require('dotenv').config();

const express = require('express');
const bcrypt = require('bcryptjs');

const { MongoClient } = require('mongodb');

let uri = process.env.MongoConnectionString;
let client = new MongoClient(uri);
let router = express.Router();

router.get("/:username",async (req,res) => {
    let username = req.params.username;

    let database = client.db('users');
    let coll = database.collection('doctors');

    let info = await coll.findOne({username:username});
    if(info){
        res.json(info);
    }
    else{
        res.json("Invalid");
    }
});

module.exports = router;

