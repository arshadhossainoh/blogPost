const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;

let database;

async function connect() {
  const client = await MongoClient.connect(process.env.CONNECTION_STRING);
  database = client.db("blog");
}

function getDb() {
  if (!database) {
    throw { message: "database connection not established" };
  }
  return database;
}

module.exports = {
  connect,
  getDb,
};
