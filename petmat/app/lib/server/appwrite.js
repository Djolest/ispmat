import { Account, Client, Databases, Storage, ID, Query } from 'appwrite';
import { z } from 'zod';

const client = new Client();
const account = new Account(client);
const storage = new Storage(client);

const database = process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID;
const collection = process.env.NEXT_PUBLIC_APPWRITE_COLLECTION_ID;
const collectionVesti = process.env.NEXT_PUBLIC_APPWRITE_COLLECTION_VESTI_ID;
const bucket = process.env.NEXT_PUBLIC_APPWRITE_BUCKET_ID;


client.setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_URL).setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID);

const databases = new Databases(client);

const VestSchema = z.object({
    Naslov: z.string().min(1),
    Novost: z.string().min(1),
    Potpis: z.string().min(1),
  });

const createVest = VestSchema;

export const addVest = async (formData, feedback) => {
    const { Naslov, Novost, Potpis } = createVest.parse({
    Naslov: formData.get('Naslov'),
    Novost: formData.get('Novost'),
    Potpis: formData.get('Potpis'),
})
    try{
        await databases.createDocument(
            database,
            collectionVesti, 
            ID.unique(), 
            {
                Naslov,
                Novost,
                Potpis
            }
        );
        
    } catch (error) {
        feedback(400);
        return {
            message: 'Databse error: Faild to create Novost',
        };
    }
    feedback(200);
    console.log('Proslo sve!')
}

export async function listVesti (totalPages) {
    const data = await databases.listDocuments(
        database, 
        collectionVesti, 
        
        );
    //console.log(data);
    return data;
    //console.log(vesti);
    //setVesti(data);
}

export async function deleteVest (vestId, feedback) {
    try {
        await databases.deleteDocument(
            database,
            collectionVesti,
            vestId
        );
    } catch (error) {
        feedback(400);
        return {
            message: 'Databese error: Failed to delete Novost',
        };
    }
    feedback(200);
}

export async function updateVest (formData, vestId, feedback) {
    const { Naslov, Novost, Potpis } = createVest.parse({
        Naslov: formData.get('Naslov'),
        Novost: formData.get('Novost'),
        Potpis: formData.get('Potpis'),
    })
        try{
            await databases.updateDocument(
                database,
                collectionVesti, 
                vestId, 
                {
                    Naslov,
                    Novost,
                    Potpis
                }
            );
            
        } catch (error) {
            feedback(400);
            return {
                message: 'Databse error: Faild to update Novost',
            };
        }
        feedback(200);
}