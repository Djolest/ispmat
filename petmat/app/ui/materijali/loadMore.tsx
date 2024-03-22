'use client';
import { listMaterijaliSve } from "@/app/lib/server/appwrite";
import { useState } from "react";
import Card from "@/app/ui/materijali/card";

export default function LoadMore() {
    const [materijali, setMaterijali] = useState([]);
    const [showButton, setShowButton] = useState(true);

    return (
        <>
            <div className="flex flex-col items-center">
                {materijali.map( (materijal: any) => (
                    <Card key={materijal.materijal.href} href={materijal.materijal.href} opis={materijal.opis} materijalId={materijal.materijalId} documentId={materijal.documentId} datum={materijal.datum}/>
                ))}
            </div>
            {showButton ? 
            <div className="flex justify-center my-10">
                <button onClick={() => {
                    listMaterijaliSve().then((data:any) => {
                        setMaterijali(data);
                        setShowButton(false);
                    })
                }} className="rounded bg-blue-500 py-2 px-4 text-white m-2">
                    Učitaj više
                </button>
            </div>
            : null}
        </>
    );
}