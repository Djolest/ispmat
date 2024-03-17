'use client';

import { getter } from "../lib/autho";

export default function PlusButton(props:any){
    if(getter()){
        return (
            <button onClick={() => props.setShowModal(true)} className="fixed bottom-5 right-5 text-white bg-blue-500 active:bg-blue-600 font-bold uppercase p-3 rounded-full shadow hover:shadow-md outline-none focus:outline-none m-1 ease-linear transition-all duration-150" type="button">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                </svg>
            </button>
        );
    }
    return null;
}