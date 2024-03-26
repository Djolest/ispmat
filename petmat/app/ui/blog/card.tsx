'use client';
import { useState } from "react";
import { getter } from "@/app/lib/autho";
import Modals from "@/app/ui/modals";
import DeleteModal from "@/app/ui/deleteModal";
import Link from "next/link";
import 'katex/dist/katex.min.css';
import Latex from 'react-latex-next';

export default function Card(props:any){
    const [showModalObrisi, setShowModalObrisi] = useState(false);
    const [showModalIzmein, setShowModalIzmein] = useState(false);

    const godina = props.blog.$createdAt.slice(0,4);
    const mesec = props.blog.$createdAt.slice(5,7);
    const dan = props.blog.$createdAt.slice(8,10);

    return (
        <div className="md:w-2/3 w-[95%]">
            <div className="m-2 block w-full p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                <Link href={`/blog/${props.blog.$id}`}>
                    <h5 className="flex justify-between items-center mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        
                        {props.blog.Title}

                        <div className='h-6 inline bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-400 border border-gray-500'>
                            {dan + '/' + mesec + '/' + godina}
                        </div>

                    </h5>
                    <p>Autor: {props.blog.Autor}</p>
                    {props.blog.Abstract ? 
                    <div className="text-gray-800">Abstrak: <br /><Latex>{props.blog.Abstract}</Latex></div>
                    : null}
                    
                    
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
                parent='obrisiBlog'
                ID={props.blog.$id}
            />
            <Modals 
                showModal={showModalIzmein}
                setShowModal={setShowModalIzmein}
                parent='izmeniBlog'
                content={props.blog}
                ID={props.blog.$id}
            />
        </div>
    );
}