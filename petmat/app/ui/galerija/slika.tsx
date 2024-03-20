'use client'
import Image from "next/image"

export default function Slika(props:any){
    //console.log(props);
    return (
        <>
            <Image
                src={props.slikaHerf}
                alt="slika"
                width={200}
                height={200}
                
            />
        </>
    );
}