'use client'
import { useState } from "react";
import ModalSlika from "./modalSlika";

export default function Slika(props:any){
    const [showSlika, setShowSlika] = useState(false);
    return (
        <div className="p-3 flex items-center">
            <img
                src={props.slikaHerf}
                alt="slika"
                className="h-auto max-w-full rounded-lg cursor-pointer"
                onClick={() => {
                    // otvori modal slike
                    setShowSlika(true);
                }}
            />
            <ModalSlika 
                href={props.slikaHerf}
                opis={props.opis}
                showSlika={showSlika}
                setShowSlika={setShowSlika}
                slikaId={props.slikaId}
                documentId={props.documentId}
            />
        </div>
    );
}