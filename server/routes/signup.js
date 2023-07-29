let express = require('express');
let { MongoClient } = require('mongodb');
require('dotenv').config();

let uri = process.env.MongoConnectionString;
let router = express.Router();
let client = new MongoClient(uri);

router.post('/',(req,res,next)=>{

});

router.post('/checkDuplicate',async (req,res,next)=>{
    let database = client.db('users');
    let coll = database.collection(`${req.body.user}s`);

    let user = await coll.findOne({username:(req.body.username)});
    if(user != null){
        res.send(true);
    }
    else{
        res.send(false);
    }
});
module.exports = router;