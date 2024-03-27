'use client'

import Link from "next/link"
import Image from "next/image"
import { useContext, useState } from "react";
//import { isSaradnikContext } from "./../layout";
import { auth, getter, reseter } from "./../lib/autho";
import { FormEvent } from "react";


export default function Title (props:any) {
    //console.log(props);
    //const isSaradnik = useContext(isSaradnikContext);

    const [showModal, setShowModal] = useState(false);

    function Modal(){
        function onSubmit(event: FormEvent<HTMLFormElement>){
            console.log('onSubmit pozvan!');
            event.preventDefault();
            const formData = new FormData(event.currentTarget);
            //console.log(formData);
            const name = formData.get('Ime');
            const pass = formData.get('Sifra');
            const oce = auth({ime: name, pass: pass});
            console.log(oce);
            if(oce){
                //props.setSaradnik(true);
                alert('Dobrodošli saradniče!');
                setShowModal(false)
                return true
            }else{
                alert('Pogrešno ime ili šifra');
                return false;
            }
        }

        return (showModal ?
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-[400px] my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                  <h3 className="text-3xl font-semibold">
                    Saradnik Log in
                  </h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-50 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-50 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      x
                    </span>
                  </button>
                </div>
                {/*body*/}
                <form onSubmit={onSubmit}>
                    <div className="m-5 p-2">
                        <input type="text" name="Ime" autoComplete="name" placeholder="Ime" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500  "/>
                    </div>
                    <div className="m-5 p-2">
                        <input type="password" name="Sifra" autoComplete="password" placeholder="Šifra" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500  "/>
                    </div>
                    
                
                    {/*footer*/}
                    <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                        <button
                        className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        type="button"
                        onClick={() => setShowModal(false)}
                        >
                        Close
                        </button>
                        <button
                        className="bg-blue-500 text-white active:bg-blue-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        type="submit"
                        onClick={() => {}}
                        >
                        Log in
                        </button>
                    </div>
                </form>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
        : null);
    }

    function Button(){
        if(!getter()){
            return (
                <button onClick={() => setShowModal(true)} className="rounded bg-blue-500 py-2 px-4 text-white m-2">
                    Saradnik log in
                </button>
            );
        }else{
            return (
                <button onClick={() => reseter() } className="rounded bg-blue-500 py-2 px-4 text-white m-2">
                    Saradnik log out
                </button>
            );
        }
    }

    return (
        <div className="flex items-center justify-between">
            <Image 
                src='/petmat_logo.png'
                width={45}
                height={45}
                alt="Logo seminara"
                className="m-2 rounded-sm"
            ></Image>
            <Link href="/">
                <h1 className="text-[2rem] inline m-2 font-['Pacifico']">Seminar matematike u petnici</h1>
            </Link>
            <Button />
            <Modal />
        </div>
    )
}