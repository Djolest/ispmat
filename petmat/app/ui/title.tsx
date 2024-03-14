'use client'

import Link from "next/link"
import Image from "next/image"
import { useContext } from "react";
import { isSaradnikContext } from "./../layout";


export default function Title (props:any) {
    //console.log(props);
    const isSaradnik = useContext(isSaradnikContext);
    return (
        <div className="flex items-center justify-between">
            <Image 
                src='/petmat_logo.png'
                width={45}
                height={45}
                alt="Logo seminara"
                className="m-2"
            ></Image>
            <Link href="/">
                <h1 className="text-[2rem] inline m-2 font-['Pacifico']">Seminar matematike u petnici</h1>
            </Link>
            <button onClick={() => {props.setSaradnik(!isSaradnik)}} className="rounded bg-blue-500 py-2 px-4 text-white m-2">
                Saradnik log in
            </button>
        </div>
    )
}