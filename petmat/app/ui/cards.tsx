'use client';

import { useState } from 'react';
import { getter } from '../lib/autho';
//import { deleteVest } from '../lib/server/appwrite';
//import Modals from './modals';
import DeleteModal from './deleteModal';
import Modals from './modals';

export default function Card(props:any){
    // Card ima title i pocetak teksta koji se vide, na klik se otvara modal sa celim tekstom potpisom i datumom.

    const [showFull, setShowFull] = useState(false);
    const [showModalObrisi, setShowModalObrisi] = useState(false);
    const [showModalIzmein, setShowModalIzmein] = useState(false);

    // racunam datum
    const godina = props.vest.$createdAt.slice(0,4);
    const mesec = props.vest.$createdAt.slice(5,7);
    const dan = props.vest.$createdAt.slice(8,10);
    //console.log(dan, mesec, godina);
    
    return (
        <>
        <div className="md:w-2/3 w-[95%]">
            <a className="m-2 block w-full p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 ">
                <div onClick={() => setShowFull(!showFull)}>
                    <h5 className="flex justify-between items-center mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
                        
                        {props.vest.Naslov}

                        <div className='h-6 inline bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded   border border-gray-500'>
                            {dan + '/' + mesec + '/' + godina}
                        </div>

                    </h5>
                    {showFull ?
                        <div>
                            <p className="font-normal text-gray-700  ">
                                {props.vest.Novost}
                            </p>
                            <br></br>
                            <p className='p-2 font-normal text-gray-700  '>
                                Piše: {props.vest.Potpis}
                            </p>
                            
                        </div>
                    :
                        <p className="font-normal text-gray-700  ">
                            {props.vest.Novost.slice(0, 100)}{props.vest.Novost.length >= 100 ? '...' : null}
                        </p>
                    }
                </div>
                {showFull && props.vest.$createdAt != props.vest.$updatedAt ? 
                <div className='p-2 font-normal text-gray-700  '>Izmenjeno: {props.vest.$updatedAt.slice(0,4) + '/' +
                props.vest.$updatedAt.slice(5,7) + '/' +
                props.vest.$updatedAt.slice(8,10)}</div>
                : null}
                {getter() && showFull ?
                    <div>
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
                
            </a>
            
        </div>
        <DeleteModal 
            showModal={showModalObrisi}
            setShowModal={setShowModalObrisi}
            parent='obrsisVest'
            ID={props.vest.$id}
        />
        <Modals 
            showModal={showModalIzmein}
            setShowModal={setShowModalIzmein}
            parent='izmeniVest'
            content={props.vest}
        />
        </>
    );
}