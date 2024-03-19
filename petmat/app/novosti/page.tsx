import ModalButton from "../ui/modalButton";
import { listVesti } from "../lib/server/appwrite";
import { Suspense } from "react";
import Card from "../ui/cards";
import LoadMore from "../ui/loadMore";


export const dynamic = 'force-dynamic';
export default async function NovostiPage() {
    const { documents: vesti } = await listVesti();

    return (
        <div>
        <Suspense>
            <div className="flex flex-col items-center">
                {vesti.map( (vest: any) => (
                    <Card key={vest.$id} vest={vest} />
                ))}
                <ModalButton parent={'novosti'} />
            </div>
        </Suspense>
        <LoadMore />
        </div>
    )
}