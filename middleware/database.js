// TODO: Open connection once and not every page, this is more efficient.
// Than initiating a connection each time
import { MongoClient } from 'mongodb';
import nextConnect from 'next-connect';

const dbHostName = "mongo.thepvlse.com";
const dbName = "PvlseDev";

const client = new MongoClient('mongodb://'+dbHostName+'/'+dbName, {
  auth: {
     user:"rob",
     password: "pvlse_db_password_is_secure_because_its_ultra_long"
  },
  authMechanism: "SCRAM-SHA-256",
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

export default async function database(req, res, next) {
  if (!client.isConnected()) await client.connect();
  req.dbClient = client;
  req.db = client.db(dbName);
  return next();
}

