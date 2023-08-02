let express = require('express');
let { MongoClient } = require('mongodb');
require('dotenv').config();

let uri = process.env.MongoConnectionString;
let router = express.Router();
let client = new MongoClient(uri);

router.get('/:catagory', async function (req, res, next) {
    let database = client.db('users');
    let coll = database.collection('doctors');

    let catagory = req.params.catagory;

    let data = await coll.aggregate([
        {
            $match: {
                specialization: { $eq: catagory}
            }
        },
        {
            $project: {
                username:1,
                ProfileImg:1,
                specialization:1,
                reputation:1,
                fees:1,
            }
        }
    ]).toArray();
    res.send(data);
});

module.exports = router;