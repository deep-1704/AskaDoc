require('dotenv').config();

const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const { MongoClient } = require('mongodb');

let uri = process.env.MongoConnectionString;
let router = express.Router();
let client = new MongoClient(uri);

router.post('/authorize', async (req, res) => {
    // console.log(req.body);
    let database = client.db('users');
    let coll = database.collection(`${req.body.user}s`);

    let user = await coll.findOne({ username: req.body.username });
    // console.log(user);
    if (user) {
        // console.log('reach 1');
        bcrypt.compare(req.body.password, user.password, (err, respond) => {
            if (respond) {
                // console.log('reach 2');
                res.send(true);
            }
            else {
                // console.log('reach 3');
                res.send(false);
            }
        })
    }
    else {
        res.send(false);
    }
})

router.post('/', (req, res) => {
    let username = req.body.username;
    let type = req.body.user;

    let accessToken = jwt.sign({username, type}, process.env.TOKEN_ACCESS_KEY, {expiresIn: '1h'});
    console.log({accessToken});
    res.json({accessToken});
})

module.exports = router;
