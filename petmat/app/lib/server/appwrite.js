import { Account, Client, Databases, Storage, ID } from 'appwrite';

const client = new Client();
const account = new Account(client);
const storage = new Storage(client);

const database = process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID;
const collection = process.env.NEXT_PUBLIC_APPWRITE_COLLECTION_ID;
const bucket = process.env.NEXT_PUBLIC_APPWRITE_BUCKET_ID;


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

export const getMessages = async () => {
    const { documents: messages } = await databases.listDocuments(database, collection);
    return messages;
  };