import { getZadatak } from "@/app/lib/server/appwrite";

export default async function ZadatakPage({ params }: { params: { id: string } }) {
    const zadatak = await getZadatak(params.id);
    //console.log('zadatak je', zadatak);
    return (
    <div className="flex justify-center">
        <div className="w-[95%] max-w-[850px]">
            <h1 className="text-4xl font-bold text-gray-900 p-4">{zadatak.data.Title}</h1>
            <h2 className=" text-sm text-gray-500 px-4">Autor: {zadatak.data.Autor}</h2>
            <object data={zadatak.pdf.href} type="application/pdf" width="100%" height="100%" className="h-screen p-4"></object>
        </div>
    </div>);
}