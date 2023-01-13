const dotenv = require('dotenv');
const { MongoClient } = require('mongodb');

let _db;

async function connect() {
    dotenv.config();
    const uri = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.fnbzrec.mongodb.net/?retryWrites=true&w=majority`;
    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    try {
        await client.connect();
        // const dbStr = await listDatabases(client);
        _db = client;
        return true;
    }
    catch (error) {
        console.error(error);
        return false;
    }
    // finally {
    //     await client.close();
    // }
}

function getDb () {
    return _db;
}

module.exports = { connect, getDb };
// main().catch(console.error);

// async function listDatabases(client) {
//     databaseList = await client.db().admin().listDatabases();
//     console.log("Databases:")
//     databaseList.databases.forEach(db => console.log(` - ${db.name}`));
// };

async function listDatabases(client) {
    databaseList = await client.db().admin().listDatabases();
    let dbStr;
    databaseList.databases.forEach(db => dbStr += `${db.name} `);
    return dbStr;
};
