import { listZadatak5 } from "../lib/server/appwrite";
import { Suspense } from "react";
import ModalButton from "../ui/modalButton";
import Card from "../ui/zadaci/card";
import LoadMore from "../ui/zadaci/loadMore";

export const dynamic = 'force-dynamic';
export default async function Zadaci(){
    const zadaci =  await listZadatak5();

    return (
    <>
        <Suspense>
            <div className="flex flex-col items-center">
                {zadaci.map((zadatak:any) => (
                    <Card zadatak={zadatak} key={zadatak.$id}/>
                ))}
            </div>
        </Suspense>
        <ModalButton parent={'zadaci'} />
        {zadaci.length == 5 ? 
            <LoadMore />
        : null}
    </>);
}