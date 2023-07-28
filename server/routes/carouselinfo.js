let express = require('express');
let { MongoClient } = require('mongodb');
require('dotenv').config();

let uri = process.env.MongoConnectionString;
let router = express.Router();
let client = new MongoClient(uri);

router.get('/', async function (req, res, next) {
  let database = client.db('users');
  let coll = database.collection('doctors');

  let data = await coll.aggregate([
    {
      $group:{
        _id:"$specialization",
        name:{$first:"$username"},
        imgsrc:{$first:"$ProfileImg"}
      }
    }
  ]).toArray();
  res.send(data);  
});

module.exports = router;