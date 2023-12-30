import { Account, Client, Databases, ID } from 'appwrite'

const client = new Client();

client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('658fbb61dd7e0bef70e4');

export const ACCOUNT = new Account(client)
export const DATABASE = new Databases(client)
export const UNIQUE_ID = ID.unique()