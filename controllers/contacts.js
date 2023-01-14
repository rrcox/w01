const client = require('../model/connect');

const getAll = async (req, res, next) => {
    const  db = await client.getDb().db('cse341');
    const collection = db.collection('contacts')
    const cursor = collection.find();
    const records = await cursor.toArray();
    res.status(200).json(records);
  };

  module.exports = { getAll };