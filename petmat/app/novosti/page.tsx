import ModalButton from "../ui/modalButton";
import { listVesti } from "../lib/server/appwrite";
import { Suspense } from "react";
import Card from "../ui/cards";


export const dynamic = 'force-dynamic';
export default async function NovostiPage() {
    

    var totalPages = 1;

    const { documents: vesti } = await listVesti();

    
    vesti.sort((a,b) => {
            if (a.$createdAt > b.$createdAt){
                return -1;
            }
            return 1
        });

    return (
        <div>
        <Suspense>
            <div className="flex flex-col items-center">
                {vesti.map( (vest) => (
                    <Card key={vest.$id} vest={vest} />
                ))}
                <ModalButton parent={'novosti'} />
            </div>
        </Suspense>
        </div>
    )
}