import * as mongoose from 'mongoose';
require('dotenv').config();

const username = process.env.USERNAME;
const password = process.env.PASSWORD;

export const databaseProviders = [
  {
    provide: 'DATABASE_CONNECTION',
    useFactory: (): Promise<typeof mongoose> =>
      mongoose.connect(`mongodb+srv://${username}:${password}@cluster0.lovba.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`)
  },
];