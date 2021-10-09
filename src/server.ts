import { MongoClient } from 'mongodb';
import { connectionOptions, port, uri } from './utils/dbConnections';
import app from './app';

MongoClient.connect(uri, connectionOptions)
  .catch((err) => {
    console.error(err.stack);
    process.exit(1);
  })
  .then(async (client) => {
    app.listen(port, () => {
      console.log(`listening on port ${port}`);
    });
  });
