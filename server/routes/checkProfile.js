require('dotenv').config();

const express = require('express');
const bcrypt = require('bcryptjs');

const { MongoClient } = require('mongodb');

let uri = process.env.MongoConnectionString;
let router = express.Router();
let client = new MongoClient(uri);

router.get('/:username', async (req, res) => {
    let username = req.params.username;

    let database = client.db('users');
    let coll = database.collection('doctors');

    let user = await coll.findOne({ username });
    if (user) {
        if (user.specialization === "") {
            res.send(false);
        }
        else {
            res.send(true);
        }
    }
    else{
        res.send('Invalid');
    }
})

module.exports = router;