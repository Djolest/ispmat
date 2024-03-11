import { Account, Client, Databases, ID } from 'appwrite';

const client = new Client();
const account = new Account(client);

const database = process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID;
const collection = process.env.NEXT_PUBLIC_APPWRITE_COLLECTION_ID;

client.setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_URL).setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID);

const databases = new Databases(client);

export const addMessage = async (message) => {
    await databases.createDocument(
    database,
    collection,
    ID.unique(),
    {
        message,
    }
    );
};