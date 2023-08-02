let express = require('express');
let bcrypt = require('bcryptjs');
let { MongoClient } = require('mongodb');
require('dotenv').config();

let uri = process.env.MongoConnectionString;
let router = express.Router();
let client = new MongoClient(uri);

router.post('/', async (req, res, next) => {
    let database = client.db('users');
    let coll = database.collection(`${req.body.user}s`);

    let password = await bcrypt.hash(req.body.password,10);

    let user = (req.body.user === 'doctor'?{
        username: req.body.username,
        password: password,
        ProfileImg: "",
        specialization: "",
        qualification: "",
        experience: 0,
        languages: "",
        tel: 0,
        email: "",
        fees:0,
        reputation: 0
    }:{
        username: req.body.username,
        password: password,
    })
    await coll.insertOne(user);
    res.sendStatus(200);
});

router.post('/checkDuplicate', async (req, res, next) => {
    let database = client.db('users');
    let coll = database.collection(`${req.body.user}s`);

    let user = await coll.findOne({ username: (req.body.username) });
    if (user != null) {
        res.send(true);
    }
    else {
        res.send(false);
    }
});
module.exports = router;