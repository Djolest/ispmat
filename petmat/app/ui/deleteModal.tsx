import { useState } from "react";
import { deleteVest, 
         deleteGalerijaSeminar, 
         deleteSlika, 
         deleteMaterijal,
         deleteMaterijalProjekat } from "../lib/server/appwrite";


export default function DeleteModal (props:any) {
    function onSubmit(){
        console.log('onSubmit pozvan!');
        //console.log(formData);
        if(props.parent == 'obrsisVest'){
            deleteVest(props.ID, setSuccess);
        }
        if(props.parent == 'obrsisGalerijaSeminar'){
            deleteGalerijaSeminar(props.ID, setSuccess);
        }
        if(props.parent == 'obrsisSliku'){
            deleteSlika(props.ID, props.ID2, setSuccess);
        }
        if(props.parent == 'obrsisMaterijal') {
            deleteMaterijal(props.ID, props.ID2, setSuccess);
        }
        if(props.parent == 'obrisiMaterijaliProjekti'){
            deleteMaterijalProjekat(props.ID, props.ID2, setSuccess);
        }
    }

    const [success, setSuccess] = useState(0);

    return (props.showModal ?
        <div className="w-80">
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-2/3 my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                  <h3 className="text-3xl font-semibold">
                    Da li ste sigurni?
                  </h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-50 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => {props.setShowModal(false); setSuccess(0)}}
                  >
                    <span className="bg-transparent text-black opacity-50 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      x
                    </span>
                  </button>
                </div>
                {/*body*/}
                    
                    {success == 200 ? 
                        <div>
                            <p className="text-green-400 text-center text-sm p-2">Uspešno obrisano!</p>
                        </div> 
                    : null}
                    {success == 400 ? 
                        <div>
                            <p className="text-red-400 text-center text-sm p-2">Došlo je do greške!</p>
                        </div> 
                    : null}
                    {success == 402 ? 
                        <div>
                            <p className="text-red-400 text-center text-sm p-2">Moguće je obrisati samo seminar koji ne sadrži slike!</p>
                        </div> 
                    : null}
                     
                    
                    {/*footer*/}
                    <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                        <button
                        className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        type="button"
                        onClick={() => {props.setShowModal(false); setSuccess(0)}}
                        >
                        Odustani
                        </button>
                        <button
                        className="bg-blue-500 text-white active:bg-blue-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        type="submit"
                        onClick={() => { onSubmit(); setSuccess(0)}}
                        >
                        Obriši
                        </button>
                    </div>
                
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </div>
        : null);
}