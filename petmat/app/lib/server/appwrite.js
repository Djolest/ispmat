import { Account, Client, Databases, Storage, ID, Query } from 'appwrite';
import { z } from 'zod';
import { unstable_noStore as noStore } from 'next/cache';

const client = new Client();
const databases = new Databases(client);
const account = new Account(client);
const storage = new Storage(client);

const database = process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID;
const collection = process.env.NEXT_PUBLIC_APPWRITE_COLLECTION_ID;
const collectionVesti = process.env.NEXT_PUBLIC_APPWRITE_COLLECTION_VESTI_ID;
const bucketGalerija = process.env.NEXT_PUBLIC_APPWRITE_BUCKET_GALERIJA_ID;
const collectionGalerijaSeminari = process.env.NEXT_PUBLIC_APPWRITE_COLLECTION_GALERIJA_SEMINARI_ID;
const collectionGalerijaAdrese = process.env.NEXT_PUBLIC_APPWRITE_COLLECTION_GALERIJA_ADRESE_ID;

client.setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_URL).setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID);


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

export async function listVesti () {
    noStore();
    const data = await databases.listDocuments(
        database, 
        collectionVesti, 
        [
            Query.orderDesc("$createdAt"),
            Query.limit(5)
        ]
        );
    //console.log(data);
    return data;
    //console.log(vesti);
    //setVesti(data);
}

export async function listVestiSve () {
    noStore();
    const data = await databases.listDocuments(
        database, 
        collectionVesti, 
        [
            Query.orderDesc("$createdAt"),
            Query.offset(5)
        ]
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

export async function listGalerija() {
    noStore();
    const data = await storage.listFiles(
        bucketGalerija
    );
    return data;
}

export async function getGalerijaFile() {
    const data = await storage.getFileView(
        bucketGalerija,
        '65f9eb1b1a4e7666f630'
    );
    return data;
}

export async function addGalerijaSeminar(formData, feedback){
    const Ime = formData.get('Ime');
    try{
        await databases.createDocument(
            database,
            collectionGalerijaSeminari,
            ID.unique(),
            {
                Ime
            }
        );
        
    } catch (error) {
        feedback(400);
        return {
            message: 'Databse error: Faild to create seminar',
        };
    }
    feedback(200);
}

export async function updateGalerijaSeminar(formData, seminarId, feedback){
    const Ime = formData.get('Ime');
    try{
        await databases.updateDocument(
            database,
            collectionGalerijaSeminari,
            seminarId,
            {
                Ime
            }
        );
    }catch(error){
        feedback(400);
        return {
            message: 'Databse error: Faild to update seminar',
        };
    }
    feedback(200);
}

export async function deleteGalerijaSeminar(seminarId, feedback) {
    try{
        const data = await databases.listDocuments(
            database,
            collectionGalerijaAdrese,
            [
                Query.equal('seminarId', [seminarId])
            ]
        );
        console.log('data je ', data);
        if(data.total > 0){
            feedback(402);
            return {
                message: 'Database error: Failed to delete seminar, seminar still has photos'
            };
        }
    } catch (error) {
        feedback(400);
        return {
            message: 'Database error: Failed to validate seminar'
        };
    }
    
    try {
        await databases.deleteDocument(
            database,
            collectionGalerijaSeminari,
            seminarId
        );
    } catch (error) {
        feedback(400);
        return {
            message: 'Database error: Failed to delete seminar'
        };
    }

  feedback(200);
}

export async function listGalerijaSeminari() {
    noStore();
    const data = await databases.listDocuments(
        database,
        collectionGalerijaSeminari,
        [
            Query.orderDesc("$createdAt")
        ]
    );

    return data;
}

export async function addSlika(formData, seminarId, feedback){
    const opisSlike = formData.get('opisSlike');
    const file = formData.get('slika');

    if(!(file.type == 'image/png' || file.type == 'image/jpeg' || file.type == 'image/jpg')){
        feedback(401);
        return {
            message: 'Samo slike PNG i JPEG format su dozvoljene'
        }
    }
    // prvo upload slike onda update baze
    // const slikaId = ID.unique();

    const slikaId = Math.random().toString(36).substring(0, 20);
    console.log(slikaId);
    try {
        await storage.createFile(
        bucketGalerija,
        slikaId,
        file
        );
    } catch (error) {
        console.error('Failed to upload file', error);
        feedback(400);
    }

    try {
        console.log(seminarId, slikaId, opisSlike)
        await databases.createDocument(
            database,
            collectionGalerijaAdrese,
            ID.unique(),
            {
                seminarId,
                slikaId,
                opisSlike
            }
        );
    } catch (error) {
        feedback(400);
        return {
            message: 'Database error: Failed to upload file'
        };
    }
    feedback(200);
}

export async function listSlike(seminarId){
    noStore();
    
    const data = await databases.listDocuments(
        database,
        collectionGalerijaAdrese,
        [
            Query.equal('seminarId',[seminarId])
        ]
    );
    
    const slike = [];
    const {documents: fetchSlike} = data;
    //console.log(fetchSlike);
    for(let i=0;i<fetchSlike.length;i++) {
        //console.log(i);
        //console.log('slika:', fetchSlike[i]);

        let slikaId = fetchSlike[i].slikaId;
        //console.log(slikaId);
        const s = await storage.getFileView(
            bucketGalerija,
            slikaId
        );

        slike.push({slika: s, opis: fetchSlike[i].opisSlike, slikaId: slikaId, documentId: fetchSlike[i].$id});
    } 

    return slike;
}

export async function deleteSlika(slikaId, documentId, feedback){
    // console.log('slika ID je ', slikaId);
    try{
        await storage.deleteFile(
            bucketGalerija,
            slikaId
        );
        console.log('proso')
        await databases.deleteDocument(
            database,
            collectionGalerijaAdrese,
            documentId
        );
    }catch(error){
        feedback(400);
        return {
            message: 'Database error: Failed to delete image'
        };
    }

    feedback(200);
}

export async function updateSlika(formData, documentId, feedback){
    const opisSlike = formData.get('opisSlike');

    try {
        await databases.updateDocument(
            database,
            collectionGalerijaAdrese,
            documentId,
            {
                opisSlike
            }
        );
    } catch (error) {
        feedback(400);
        return {
            message: 'Database error: Failed to update opis'
        };
    }

    feedback(200);
}