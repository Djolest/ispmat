'use client';
import { getter } from "@/app/lib/autho";
import DeleteModal from "../deleteModal";
import { useState } from "react";
import Modals from "../modals";

export default function ModalSlika(props:any){
    const [showModalObrisi, setShowModalObrisi] = useState(false);
    const [showModalIzmein, setShowModalIzmein] = useState(false);

    return (
    <div>
        {props.showSlika ?
            <div className="w-80 fixed top-1">
                <div
                    className="z-40 justify-center items-center flex overflow-x-scroll overflow-y-auto fixed top-1 inset-0 outline-none focus:outline-none"
                    onClick={() => {props.setShowSlika(false)}}
                >
                    <div className="z-50 relative w-2/3 my-6 mx-auto max-w-3xl max-h-screen overflow-x-scroll">
                        {/*content*/}
                        <div className="bg-white border-0 rounded-lg shadow-lg relative flex flex-col w-full outline-none focus:outline-none object-contain"
                            onClick={e=>{e.stopPropagation()}}>
                            {/*body*/}
                            <img 
                                src={props.href}
                                alt="slika"
                                className="h-auto max-w-full rounded-lg"
                            />
                            <p className="font-normal text-gray-700 p-3">{props.opis}</p>
                            {getter() ? 
                                <div className="flex justify-between m-2"> 
                                    <button className="p-3 bg-gray-500 text-white active:bg-gray-600 font-bold uppercase text-sm rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                        onClick={()=>{setShowModalIzmein(true)}}
                                    >Izmein</button>
                                    <button className="p-3 bg-red-500 text-white active:bg-red-600 font-bold uppercase text-sm rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                        onClick={()=>(setShowModalObrisi(true))}
                                    >Obriši</button>
                                </div>
                            : null}
                        </div>
                    </div>
                </div>
                <div className="opacity-35 fixed inset-0 z-30 bg-black"></div>
            </div>
        : null}
        <DeleteModal 
            showModal={showModalObrisi}
            setShowModal={setShowModalObrisi}
            parent='obrsisSliku'
            ID={props.slikaId}
            ID2={props.documentId}
        />
        <Modals 
            showModal={showModalIzmein}
            setShowModal={setShowModalIzmein}
            parent='izmeniSlika'
            content={props}
        />
    </div>);
}