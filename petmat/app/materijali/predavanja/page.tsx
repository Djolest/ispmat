import { listMaterijali5 } from "@/app/lib/server/appwrite"
import ModalButton from "@/app/ui/modalButton"
import { Suspense } from "react"
import Card from "@/app/ui/materijali/card";


export const dynamic = 'force-dynamic';
export default async function NovostiPage() {
    const materijali = await listMaterijali5();
    return (
        <>
            <Suspense>
                <div className="flex flex-col items-center">
                    {materijali.map( (materijal: any) => (
                        <Card key={materijal.materijal.href} href={materijal.materijal.href} opis={materijal.opis} materijalId={materijal.materijalId} documentId={materijal.documentId} datum={materijal.datum}/>
                    ))}
                    <ModalButton parent={'novosti'} />
                </div>
            </Suspense>
            <ModalButton 
                parent='materijaliPredavanja'
            />
        </>
    );
}