'use client'

import { getter } from "@/app/lib/autho";
import Modals from "@/app/ui/modals";
import DeleteModal from "@/app/ui/deleteModal";
import { useState } from "react";
import Link from "next/link";

export default function Card(props:any) {
    const [showModalObrisi, setShowModalObrisi] = useState(false);
    const [showModalIzmein, setShowModalIzmein] = useState(false);
    return (
        <div className="md:w-2/3 w-[95%]">
            <div className="m-2 block w-full p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 ">
                <Link href={`/galerija/${props.seminar.$id}`}>
                    <div className="flex justify-between">
                        <h3 className="font-bold text-black">{props.seminar.Ime}</h3>
                        <svg className="w-6 h-6 text-gray-800  " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 8 14">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 13 5.7-5.326a.909.909 0 0 0 0-1.348L1 1"/>
                        </svg>
                    </div>
                </Link>
                {getter() ?
                    <div>
                        <button
                        className="text-gray-500 background-transparent font-bold uppercase px-6 text-sm outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                        type="button"
                        onClick={() => {setShowModalIzmein(true)}}
                        >
                            Izmeni
                        </button>
                        
                        <button
                        className="text-red-500 background-transparent font-bold uppercase px-6 text-sm outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                        type="button"
                        onClick={() => {setShowModalObrisi(true)}}
                        >
                            Obriši
                        </button>
                    </div>
                :
                    null
                }
            </div>
            <DeleteModal 
                showModal={showModalObrisi}
                setShowModal={setShowModalObrisi}
                parent='obrsisGalerijaSeminar'
                ID={props.seminar.$id}
            />
            <Modals 
                showModal={showModalIzmein}
                setShowModal={setShowModalIzmein}
                parent='izmeniGalerijaSeminar'
                content={props.seminar}
            />
        </div>
    );
}