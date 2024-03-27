'use client';
import { useState } from "react";
import { getter } from "@/app/lib/autho";
import Modals from "@/app/ui/modals";
import DeleteModal from "@/app/ui/deleteModal";
import Link from "next/link";

export default function Card(props:any){
    const [showModalObrisi, setShowModalObrisi] = useState(false);
    const [showModalIzmein, setShowModalIzmein] = useState(false);

    const godina = props.zadatak.$createdAt.slice(0,4);
    const mesec = props.zadatak.$createdAt.slice(5,7);
    const dan = props.zadatak.$createdAt.slice(8,10);

    return (
        <div className="md:w-2/3 w-[95%]">
            <div className="m-2 block w-full p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 ">
                <Link href={`/zadaci/${props.zadatak.$id}`}>
                    <h5 className="flex justify-between items-center mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
                        
                        {props.zadatak.Title}

                        <div className='h-6 inline bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded  border border-gray-500'>
                            {dan + '/' + mesec + '/' + godina}
                        </div>

                    </h5>
                    <p>Autor: {props.zadatak.Autor}</p>  
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
                parent='obrisiZadatak'
                ID={props.zadatak.$id}
            />
            <Modals 
                showModal={showModalIzmein}
                setShowModal={setShowModalIzmein}
                parent='izmeniZadatak'
                content={props.zadatak}
                ID={props.zadatak.$id}
            />
        </div>
    );
}