import { listSlike } from "@/app/lib/server/appwrite";
import ModalButton from "@/app/ui/modalButton";
import Slika from "@/app/ui/galerija/slika";

export const dynamic = 'force-dynamic';
export default async function GalerijaSeminar({ params }: { params: { id: string } }){
    const slike = await listSlike(params.id);
    //console.log('sa clienta:', slike[0].toString());
    return (
        <>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {slike.map((slika) => (
                    <Slika key={slika.slika.href} slikaHerf={slika.slika.toString()} opis={slika.opis} slikaId={slika.slikaId} documentId={slika.documentId}/>
                ))}
            </div>
            <ModalButton parent={'galerijaSlike'} seminarId={params.id} />
        </>
    );
}