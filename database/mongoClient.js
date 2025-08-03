const { MongoClient } = require('mongodb');
require('dotenv').config();

const client = new MongoClient(process.env.MONGO_URI);
const connectDB = async () => {
  if (!client.isConnected?.()) {
    await client.connect();
  }
  return client.db();
};

module.exports = connectDB;
