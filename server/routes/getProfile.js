require('dotenv').config();

const express = require('express');
const bcrypt = require('bcryptjs');

const { MongoClient } = require('mongodb');

let uri = process.env.MongoConnectionString;
let router = express.Router();
let client = new MongoClient(uri);

router.get('/:username',async (req,res)=>{
    let username = req.params.username;

    let database = client.db('users');
    let coll = database.collection('doctors');

    let info = await coll.findOne({username:username});
    res.json(info);
})

module.exports = router;