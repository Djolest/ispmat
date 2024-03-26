'use client';
import { listZadatakSve } from "../../lib/server/appwrite";
import { useState } from "react";
import Card from "./card";

export default function LoadMore() {
    const [zadatak, setZadatak] = useState([]);
    const [showButton, setShowButton] = useState(true);

    return (
        <>
            <div className="flex flex-col items-center">
                {zadatak.map( (zadatak: any) => (
                    <Card zadatak={zadatak} key={zadatak.$id}/>
                ))}
            </div>
            {showButton ? 
            <div className="flex justify-center my-10">
                <button onClick={() => {
                    listZadatakSve().then(data => {
                        setZadatak(data)
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