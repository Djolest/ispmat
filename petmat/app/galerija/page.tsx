import { Suspense } from "react";
import ModalButton from "../ui/modalButton";
import { listGalerijaSeminari } from "../lib/server/appwrite";
import Card from "../ui/galerija/Card";


export const dynamic = 'force-dynamic';
export default async function Galerija() {
    const {documents: seminari} = await listGalerijaSeminari();
    return (
        <>
            <Suspense>
                <div className="flex flex-col items-center">
                    {seminari.map((seminar:any) => (
                        <Card seminar={seminar} key={seminar.$id} />
                    ))}
                </div>
            </Suspense> 
            <ModalButton parent={'galerijaSeminar'} />
        </>
    );
}