import { Account, Client, Databases, Storage, ID, Query } from 'appwrite';
import { z } from 'zod';
import { unstable_noStore as noStore, revalidatePath } from 'next/cache';

const client = new Client();
const databases = new Databases(client);
const account = new Account(client);
const storage = new Storage(client);

const database = process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID;
const collection = process.env.NEXT_PUBLIC_APPWRITE_COLLECTION_ID;
const collectionVesti = process.env.NEXT_PUBLIC_APPWRITE_COLLECTION_VESTI_ID;
const bucketGalerija = process.env.NEXT_PUBLIC_APPWRITE_BUCKET_GALERIJA_ID;
const bucketMaterijali = process.env.NEXT_PUBLIC_APPWRITE_BUCKET_MATERIJALI_ID;
const collectionGalerijaSeminari = process.env.NEXT_PUBLIC_APPWRITE_COLLECTION_GALERIJA_SEMINARI_ID;
const collectionGalerijaAdrese = process.env.NEXT_PUBLIC_APPWRITE_COLLECTION_GALERIJA_ADRESE_ID;
const collectionMaterijaliPredavanja = process.env.NEXT_PUBLIC_APPWRITE_COLLECTION_MATERIJALI_PREDAVANJA_ID;
const collectionMaterijaliProjekti = process.env.NEXT_PUBLIC_APPWRITE_COLLECTION_MATERIJALI_PROJEKTI_ID;
const collectionBlog = process.env.NEXT_PUBLIC_APPWRITE_COLLECTION_BLOG_ID;

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
    return data;
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
    return data;
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
    for(let i=0;i<fetchSlike.length;i++) {
        let slikaId = fetchSlike[i].slikaId;
        const s = await storage.getFileView(
            bucketGalerija,
            slikaId
        );

        slike.push({slika: s, opis: fetchSlike[i].opisSlike, slikaId: slikaId, documentId: fetchSlike[i].$id});
    } 
    return slike;
}

export async function deleteSlika(slikaId, documentId, feedback){
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

// materijali/predavanja

export async function addMaterijalPredavanje(formData, feedback){
    const materijal = formData.get('materijal');
    const opis = formData.get('opis');
    const materijalId = Math.random().toString(36).substring(0, 20);
    try{
        // prvo saljem materijal na storage onda unosim rekord u kolekciju
        await storage.createFile(
            bucketMaterijali,
            materijalId,
            materijal
        );
    }catch(error){
        feedback(400);
        return{
            message: 'Storage error: failed to upload file'
        }
    }
    try{
        await databases.createDocument(
            database,
            collectionMaterijaliPredavanja,
            ID.unique(),
            {
                opis,
                materijalId
            }
        );
    }catch(error){
        feedback(400);
        return {
            message: 'Database error: Failed to add material'
        };
    }
    feedback(200);
}

export async function listMaterijali5(){
    noStore();
    const data = await databases.listDocuments(
        database,
        collectionMaterijaliPredavanja,
        [
            Query.orderDesc("$createdAt"),
            Query.limit(5)
        ]
    )
    const materijali = [];
    const {documents: fetchMaterijali} = data;
    for(let i=0;i<fetchMaterijali.length;i++) {
        let materijalId = fetchMaterijali[i].materijalId;
        const m = await storage.getFileDownload(
            bucketMaterijali,
            materijalId
        );
        materijali.push({
            materijal: m,
            opis: fetchMaterijali[i].opis, 
            materijalId: materijalId, 
            documentId: fetchMaterijali[i].$id,
            datum: fetchMaterijali[i].$createdAt
        });
    }
    return materijali;
}

export async function listMaterijaliSve(){
    noStore();
    const data = await databases.listDocuments(
        database,
        collectionMaterijaliPredavanja,
        [
            Query.orderDesc("$createdAt"),
            Query.offset(5)
        ]
    )
    const materijali = [];
    const {documents: fetchMaterijali} = data;
    for(let i=0;i<fetchMaterijali.length;i++) {
        let materijalId = fetchMaterijali[i].materijalId;
        const m = await storage.getFileDownload(
            bucketMaterijali,
            materijalId
        );
        materijali.push({materijal: m, opis: fetchMaterijali[i].opis, materijalId: materijalId, documentId: fetchMaterijali[i].$id, datum: fetchMaterijali[i].$createdAt});
    }
    return materijali;
}

export async function deleteMaterijal(materijalId, documentId, feedback){
    try {
        await storage.deleteFile(
            bucketMaterijali,
            materijalId
        );
        await databases.deleteDocument(
            database,
            collectionMaterijaliPredavanja,
            documentId
        );
    } catch (error) {
        feedback(400);
        return {
            message: 'Database error: Failed to delete material'
        };
    }
    feedback(200);
}

export async function updateMaterijal(formData, documentId, feedback){
    const opis = formData.get('opis');
    try {
        await databases.updateDocument(
            database,
            collectionMaterijaliPredavanja,
            documentId,
            {
                opis
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

// materijali/projekti

export async function addMaterijalProjekat(formData, feedback){
    const materijal = formData.get('materijal');
    const opis = formData.get('opis');
    const materijalId = Math.random().toString(36).substring(0, 20);
    try{
        // prvo saljem materijal na storage onda unosim rekord u kolekciju
        await storage.createFile(
            bucketMaterijali,
            materijalId,
            materijal
        );
    }catch(error){
        feedback(400);
        return{
            message: 'Storage error: failed to upload file'
        }
    }
    try{
        await databases.createDocument(
            database,
            collectionMaterijaliProjekti,
            ID.unique(),
            {
                opis,
                materijalId
            }
        );
    }catch(error){
        feedback(400);
        return {
            message: 'Database error: Failed to add material'
        };
    }
    feedback(200);
}

export async function listMaterijaliProjekti(){
    noStore();
    const data = await databases.listDocuments(
        database,
        collectionMaterijaliProjekti,
        [
            Query.orderDesc("$createdAt")
        ]
    )
    const materijali = [];
    const {documents: fetchMaterijali} = data;
    for(let i=0;i<fetchMaterijali.length;i++) {
        let materijalId = fetchMaterijali[i].materijalId;
        const m = await storage.getFileDownload(
            bucketMaterijali,
            materijalId
        );
        materijali.push({materijal: m, opis: fetchMaterijali[i].opis, materijalId: materijalId, documentId: fetchMaterijali[i].$id, datum: fetchMaterijali[i].$createdAt});
    }
    return materijali;
}

export async function deleteMaterijalProjekat(materijalId, documentId, feedback){
    try {
        await storage.deleteFile(
            bucketMaterijali,
            materijalId
        );
        await databases.deleteDocument(
            database,
            collectionMaterijaliProjekti,
            documentId
        );
    } catch (error) {
        feedback(400);
        return {
            message: 'Database error: Failed to delete material'
        };
    }
    feedback(200);
}

export async function updateMaterijalProjekat(formData, documentId, feedback){
    const opis = formData.get('opis');
    try {
        await databases.updateDocument(
            database,
            collectionMaterijaliProjekti,
            documentId,
            {
                opis
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

// blog
// Date, Title, Abstrac, Autor, pdf, yt, dodatno, prva 4 za karticu, svi za stranicu

export async function addBlog(formData, feedback){
    const Title = formData.get('Title');
    const Abstract = formData.get('Abstract');
    const Autor = formData.get('Autor');
    const pdfFajl = formData.get('pdf');
    const pdf = Math.random().toString(36).substring(0, 20);
    const youtubeLink = formData.get('youtubeLink');
    const dodatnoFajl = formData.get('dodatno');
    let dodatni = '';
    console.log(youtubeLink);
    try {
        await storage.createFile(
            bucketMaterijali,
            pdf,
            pdfFajl
        );
        console.log('proso 1');

        if(dodatnoFajl.size > 0){
            dodatni = Math.random().toString(36).substring(0, 20);
            await storage.createFile(
                bucketMaterijali,
                dodatni,
                dodatnoFajl
            );
            console.log('proso 2');
        }

        await databases.createDocument(
        database,
        collectionBlog,
        ID.unique(),
        {
            Title,
            Abstract,
            Autor,
            pdf,
            youtubeLink,
            dodatni
        }
        );
        console.log('proso 3');

    } catch (error) {
        feedback(400);
        return {
        message: 'Database error: Failed to add blog post'
        };
    }
    feedback(200);
}

export async function listBlog5(){ // dobija samo pocetne karice
    noStore();
    const data = await databases.listDocuments(
        database,
        collectionBlog,
        [
            Query.limit(5),
            Query.orderDesc("$createdAt")
        ]
    );

    const {documents: fetchBlogovi} = data;

    return fetchBlogovi;
}

export async function listBlog5More(count){ // malo po malo od kartica
    noStore();
    const data = await databases.listDocuments(
        database,
        collectionBlog,
        [
            Query.offset(count*5),
            Query.limit(5),
            Query.orderDesc("$createdAt")
        ]
    );

    const {documents: fetchBlogovi} = data;

    return fetchBlogovi;
}

export async function getBlog(Id){ // dobija pdf i dodtane materijale od bloga.
    noStore();
    const data = await databases.getDocument(
        database,
        collectionBlog,
        Id
    );
    const pdfId = data.pdf; 
    const pdf = await storage.getFileView(
        bucketMaterijali,
        pdfId
    );

    let dodatno = null;
    if(data.dodatni){
        dodatno = await storage.getFileDownload(
            bucketMaterijali,
            data.dodatni
        );
    }

    return {data: data, pdf: pdf, dodatno: dodatno};
}

export async function deleteBlog(Id, feedback){
    try {
    const data = await databases.getDocument(
      database,
      collectionBlog,
      Id
    );

    const pdf = data.pdf;
    const dodatni  = data.dodatni;

    if(pdf){
      await storage.deleteFile(bucketMaterijali, pdf);
    }

    if(dodatni){
      await storage.deleteFile(bucketMaterijali, dodatni);
    }

    await databases.deleteDocument(
      database,
      collectionBlog,
      Id
    );

    } catch (error) {
        feedback(400);
        return {
        message: 'Database error: Failed to delete blog post'
        };
    }

    feedback(200);
}

export async function updateBlog(formData, Id, feedback){
    const Title = formData.get('Title');
    const Abstract = formData.get('Abstract');
    const Autor = formData.get('Autor');
    const youtubeLink = formData.get('youtubeLink');

    try {
        await databases.updateDocument(
            database,
            collectionBlog,
            Id,
            {
                Title,
                Abstract,
                Autor,
                youtubeLink,
            }
        );

    } catch (error) {
        feedback(400);
        return {
            message: 'Update error'
        }
    }
    feedback(200);
}
