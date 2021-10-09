import dotenv from 'dotenv';
dotenv.config();
export const port = process.env.APP_PORT;
const dbName =
  process.env.ENV === 'production'
    ? process.env.MONGO_DB
    : process.env.MONGO_TEST_DB;

export const connectionOptions = { wtimeoutMS: 2500, useNewUrlParser: true };

export const uri = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@interview-questions.7lcdg.mongodb.net/${dbName}?retryWrites=true&w=majority`;
