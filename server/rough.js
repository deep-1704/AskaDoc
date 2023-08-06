require('dotenv').config(); 

let { MongoClient } = require('mongodb');

let uri = process.env.MongoConnectionString;
let client = new MongoClient(uri);

async function run(){
    let database = client.db('users');
    let coll1 = database.collection('ChatDB');
    let coll2 = database.collection('doctors');

    let doctors = await coll2.find({},{username:1}).toArray();

    doctors.forEach(async (val) => {
        await coll1.insertOne({
            username: val.username,
            conversations:[]
        })
    })
}
run();