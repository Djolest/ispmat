import { listSlike } from "@/app/lib/server/appwrite";
import ModalButton from "@/app/ui/modalButton";
import Slika from "@/app/ui/galerija/slika";

export const dynamic = 'force-dynamic';
export default async function GalerijaSeminar({ params }: { params: { id: string } }){
    const slike = await listSlike(params.id);
    //console.log('sa clienta:', slike[0].toString());
    return (
        <>
            <div>
                {slike.map((slika) => (
                    
                    <Slika key={slika.href} slikaHerf={slika.toString()} />
                ))}
            </div>
            <ModalButton parent={'galerijaSlike'} seminarId={params.id} />
        </>
    );
}