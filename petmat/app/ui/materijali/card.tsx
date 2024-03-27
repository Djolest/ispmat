'use client';
import DeleteModal from "../deleteModal";
import Modals from "../modals";
import { getter } from "@/app/lib/autho";
import { useState } from "react";

export default function Card(props:any){
    const [showModalObrisi, setShowModalObrisi] = useState(false);
    const [showModalIzmein, setShowModalIzmein] = useState(false);

    const godina = props.datum.slice(0,4);
    const mesec = props.datum.slice(5,7);
    const dan = props.datum.slice(8,10);

    let obrisiParent = '';
    if(props.parent == 'materijaliProjekti'){
        obrisiParent = 'obrisiMaterijaliProjekti';
    }else{
        obrisiParent = 'obrsisMaterijal'
    }
    let izmeniParent = '';
    if(props.parent == 'materijaliProjekti'){
        izmeniParent = 'izmeniMaterijaliProjekti';
    }else{
        izmeniParent = 'izmeniMaterijal'
    }

    return (
        <>
            <div className="md:w-2/3 w-[95%]">
                <div className="m-2 block w-full p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 ">
                        <div className="flex items-center mb-2 tracking-tight text-gray-900  ">
                            <div className='flex-none h-6 inline bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded  border-gray-500'>
                                {dan + '/' + mesec + '/' + godina}
                            </div>
                            <p className="flex-grow m-2">{props.opis}</p>
                            <a href={props.href} className="flex-none rounded bg-blue-500 py-2 px-4 text-white">Preuzmi</a>
                        </div>
                    {getter() ?
                        <div className="flex justify-around">
                            <button
                            className="text-gray-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                            type="button"
                            onClick={() => {setShowModalIzmein(true)}}
                            >
                                Izmeni
                            </button>
                            
                            <button
                            className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
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
            </div>
        <DeleteModal 
            showModal={showModalObrisi}
            setShowModal={setShowModalObrisi}
            parent={obrisiParent}
            ID={props.materijalId}
            ID2={props.documentId}
        />
        <Modals 
            showModal={showModalIzmein}
            setShowModal={setShowModalIzmein}
            parent={izmeniParent}
            ID={props.documentId}
            opis={props.opis}
        />
        </>
    );
}