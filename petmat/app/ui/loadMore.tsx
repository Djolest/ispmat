'use client';
import { listVestiSve } from "../lib/server/appwrite";
import { useState } from "react";
import ModalButton from "./modalButton";
import Card from "./cards";

export default function LoadMore() {
    const [vesti, setVesti] = useState([]);
    const [showButton, setShowButton] = useState(true);

    return (
        <>
            <div className="flex flex-col items-center">
                {vesti.map( (vest: any) => (
                    <Card key={vest.$id} vest={vest} />
                ))}
                <ModalButton parent={'novosti'} />
            </div>
            {showButton ? 
            <div className="flex justify-center my-10">
                <button onClick={() => {
                    listVestiSve().then(data => {
                        setVesti(data.documents)
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