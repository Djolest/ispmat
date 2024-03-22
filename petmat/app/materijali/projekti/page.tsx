import { listMaterijaliProjekti } from "@/app/lib/server/appwrite"
import ModalButton from "@/app/ui/modalButton"
import { Suspense } from "react"
import Card from "@/app/ui/materijali/card";

export const dynamic = 'force-dynamic';
export default async function NovostiPage() {
    const materijali = await listMaterijaliProjekti();
    return (
        <>
            <Suspense>
                <div className="flex flex-col items-center">
                    {materijali.map( (materijal: any) => (
                        <Card key={materijal.materijal.href} href={materijal.materijal.href} opis={materijal.opis} materijalId={materijal.materijalId} documentId={materijal.documentId} datum={materijal.datum} parent='materijaliProjekti'/>
                    ))}
                </div>
            </Suspense>
            <ModalButton 
                parent='materijaliProjekti'
            />
        </>
    );
}