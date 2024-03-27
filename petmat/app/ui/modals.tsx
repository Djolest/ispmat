'use client'

import { FormEvent, useState } from "react";
import { addVest, 
         updateVest, 
         addGalerijaSeminar, 
         updateGalerijaSeminar, 
         addSlika, 
         updateSlika, 
         addMaterijalPredavanje,
         addMaterijalProjekat, 
         updateMaterijal,
         updateMaterijalProjekat,
         addBlog,
         updateBlog,
         addZadatak,
         updateZadatak } from "../lib/server/appwrite";


export default function Modals(props:any){

    function onSubmit(event: FormEvent<HTMLFormElement>){
        console.log('onSubmit pozvan!');
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        //console.log(formData);
        if(props.parent == 'novosti'){
            addVest(formData, setSuccess);
        }
        if(props.parent == 'izmeniVest'){
            updateVest(formData, props.content.$id, setSuccess);
        }
        if(props.parent == 'galerijaSeminar'){
            addGalerijaSeminar(formData, setSuccess);
        }
        if(props.parent == 'izmeniGalerijaSeminar'){
          updateGalerijaSeminar(formData, props.content.$id, setSuccess);
        }
        if(props.parent == 'galerijaSlike'){
          addSlika(formData, props.seminarId, setSuccess);
        }
        if(props.parent == 'izmeniSlika'){
          updateSlika(formData, props.content.documentId, setSuccess);
        }
        if(props.parent == 'materijaliPredavanja'){
          addMaterijalPredavanje(formData, setSuccess);
        }
        if(props.parent == 'materijaliProjekti'){
          addMaterijalProjekat(formData, setSuccess);
        }
        if(props.parent == 'izmeniMaterijal'){
          updateMaterijal(formData, props.ID, setSuccess);
        }
        if(props.parent == 'izmeniMaterijaliProjekti'){
          updateMaterijalProjekat(formData, props.ID, setSuccess);
        }
        if(props.parent == 'blog'){
          addBlog(formData, setSuccess);
        }
        if(props.parent == 'izmeniBlog'){
          updateBlog(formData, props.ID, setSuccess);
        }
        if(props.parent == 'zadaci'){
          addZadatak(formData, setSuccess);
        }
        if(props.parent == 'izmeniZadatak'){
          updateZadatak(formData, props.ID, setSuccess);
        }
    }

    const [charCount, setCharCount] = useState(0);
    const [success, setSuccess] = useState(0);

    return (props.showModal ?
        <div className="w-80 fixed top-1">
          <div
            className="justify-center items-center flex overflow-x-scroll overflow-y-auto fixed top-1 inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-2/3 my-6 mx-auto max-w-3xl max-h-screen overflow-x-scroll">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                  <h3 className="text-3xl font-semibold">
                    {/* I ovo se menja */}
                    {props.parent == 'novosti' ? 'Nova novost' : null }
                    {props.parent == 'izmeniVest' ? 'Izmeni novost' : null}
                    {props.parent == 'galerijaSeminar' ? 'Nova grupa slika' : null}
                    {props.parent == 'izmeniGalerijaSeminar' ? 'Izmeni grupu slika' : null}
                    {props.parent == 'galerijaSlike' ? 'Nova slika' : null}
                    {props.parent == 'izmeniSlika' ? 'Izmeni opis slike' : null}
                    {props.parent == 'materijaliPredavanja' ? 'Novi materijal' : null}
                    {props.parent == 'materijaliProjekti' ? 'Novi materijal' : null}
                    {props.parent == 'izmeniMaterijal' ? 'Izmeni opis' : null}
                    {props.parent == 'izmeniMaterijaliProjekti' ? 'Izmeni opis' : null}
                    {props.parent == 'blog' ? 'Novi blog' : null}
                    {props.parent == 'izmeniBlog' ? 'Izmeni blog' : null}
                    {props.parent == 'zadaci' ? 'Novi zadatak' : null}
                    {props.parent == 'izmeniZadatak' ? 'Izmeni zadatak' : null}
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
                <form onSubmit={onSubmit}>
                    {/* Samo ovaj deo se menja ovde! */}
                    {props.parent == 'novosti' ? 
                      <div>
                          <div className="m-5 p-2">
                              <input type="text" name="Naslov" autoComplete="name" placeholder="Naslov novosti" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500  "/>
                          </div>
                          <div className="m-5 p-2">
                              <textarea name="Novost" onChange={e => {setCharCount(e.target.value.length)}} placeholder="Čujte i počujte, daje se na znanje..." className="block p-2.5 w-full h-40 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500  "></textarea>
                          </div>
                          <div>
                              <p className="text-gray-400 text-right text-xs pr-2 mr-5">{charCount}/1024</p>
                          </div>
                          <div className="m-5 p-2">
                              <input type="text" name="Potpis" autoComplete="name" placeholder="Potpis novinara" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500  "/>
                          </div>
                      </div>
                    : null}

                    {props.parent == 'izmeniVest' ? 
                      <div>
                          <div className="m-5 p-2">
                              <input defaultValue={props.content.Naslov}  type="text" name="Naslov" autoComplete="name" placeholder="Naslov novosti" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500  "/>
                          </div>
                          <div className="m-5 p-2">
                              <textarea defaultValue={props.content.Novost} name="Novost" onChange={e => {setCharCount(e.target.value.length)}} placeholder="Čujte i počujte, daje se na znanje..." className="block p-2.5 w-full h-40 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500  "></textarea>
                          </div>
                          <div>
                              <p className="text-gray-400 text-right text-xs pr-2 mr-5">{charCount}/1024</p>
                          </div>
                          <div className="m-5 p-2">
                              <input defaultValue={props.content.Potpis} type="text" name="Potpis" autoComplete="name" placeholder="Potpis novinara" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500  "/>
                          </div>
                      </div>
                    : null}

                    {props.parent == 'galerijaSeminar' ? 
                      <div>
                          <div className="m-5 p-2">
                              <input type="text" name="Ime" autoComplete="name" placeholder="Ime grupe slika" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500  "/>
                          </div>
                      </div>
                    : null}

                    {props.parent == 'izmeniGalerijaSeminar' ? 
                      <div>
                          <div className="m-5 p-2">
                              <input defaultValue={props.content.Ime} type="text" name="Ime" autoComplete="name" placeholder="Naslov novosti" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500  "/>
                          </div>
                      </div>
                    : null}

                    {props.parent == 'galerijaSlike' ?
                      <div>
                        
                        <div className="m-5 p-2">
                            <textarea name="opisSlike" onChange={e => {setCharCount(e.target.value.length)}} placeholder="Čujte i počujte, daje se na znanje..." className="block p-2.5 w-full h-40 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500  "></textarea>
                        </div>
                        <div>
                            <p className="text-gray-400 text-right text-xs pr-2 mr-5">{charCount}/1024</p>
                        </div>
                        <div className="m-5 p-2">
                            <input type="file" name="slika" placeholder="Izaberite sliku" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500  "/>
                        </div>
                      </div>
                    : null}

                    {props.parent == 'izmeniSlika' ? 
                      <div>
                        <div className="m-5 p-2">
                            <input defaultValue={props.content.opis} type="text" name="opisSlike" autoComplete="name" placeholder="Naslov novosti" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500  "/>
                        </div>
                      </div>
                    : null}

                    {props.parent == 'materijaliPredavanja' ?
                      <div>
                        
                        <div className="m-5 p-2">
                            <textarea name="opis" onChange={e => {setCharCount(e.target.value.length)}} placeholder="Čujte i počujte, daje se na znanje..." className="block p-2.5 w-full h-40 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500  "></textarea>
                        </div>
                        <div>
                            <p className="text-gray-400 text-right text-xs pr-2 mr-5">{charCount}/1024</p>
                        </div>
                        <div className="m-5 p-2">
                            <input type="file" name="materijal" placeholder="Izaberite sliku" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500  "/>
                        </div>
                      </div>
                    : null}

                    {props.parent == 'materijaliProjekti' ?
                      <div>
                        
                        <div className="m-5 p-2">
                            <textarea name="opis" onChange={e => {setCharCount(e.target.value.length)}} placeholder="Čujte i počujte, daje se na znanje..." className="block p-2.5 w-full h-40 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500  "></textarea>
                        </div>
                        <div>
                            <p className="text-gray-400 text-right text-xs pr-2 mr-5">{charCount}/1024</p>
                        </div>
                        <div className="m-5 p-2">
                            <input type="file" name="materijal" placeholder="Izaberite sliku" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500  "/>
                        </div>
                      </div>
                    : null}

                    {props.parent == 'izmeniMaterijal' ? 
                      <div>
                        <div className="m-5 p-2">
                            <textarea defaultValue={props.opis} name="opis" onChange={e => {setCharCount(e.target.value.length)}} placeholder="Čujte i počujte, daje se na znanje..." className="block p-2.5 w-full h-40 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500  "></textarea>
                        </div>
                        <div>
                            <p className="text-gray-400 text-right text-xs pr-2 mr-5">{charCount}/1024</p>
                        </div>
                      </div>
                    : null}  

                    {props.parent == 'izmeniMaterijaliProjekti' ? 
                      <div>
                        <div className="m-5 p-2">
                            <textarea defaultValue={props.opis} name="opis" onChange={e => {setCharCount(e.target.value.length)}} placeholder="Čujte i počujte, daje se na znanje..." className="block p-2.5 w-full h-40 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500  "></textarea>
                        </div>
                        <div>
                            <p className="text-gray-400 text-right text-xs pr-2 mr-5">{charCount}/1024</p>
                        </div>
                      </div>
                    : null} 

                    {props.parent == 'blog' ? 
                      <div>  
                        <div className="m-5 p-2">
                            <input type="text" name="Title" placeholder="Naslov" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500  "/>
                        </div>
                        <div className="m-5 p-2">
                            <input  type="text" name="Autor" placeholder="Autor" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500  "/>
                        </div>
                        <div className="m-5 p-2">
                            <textarea  name="Abstract" onChange={e => {setCharCount(e.target.value.length)}} placeholder="Čujte i počujte, daje se na znanje..." className="block p-2.5 w-full h-40 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500  "></textarea>
                        </div>
                        <div>
                            <p className="text-gray-400 text-right text-xs pr-2 mr-5">{charCount}/1024</p>
                        </div>
                        <div className="m-5 p-2">
                            <p>Pdf:</p>
                            <input type="file" name="pdf" placeholder="Izaberite pdf" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500  "/>
                        </div>
                        <div className="m-5 p-2">
                            <input type="text" name="youtubeLink" placeholder="Dodajte youtube link (Opciono)" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500  "/>
                        </div>
                        <div className="m-5 p-2">
                            <p>Dodatni materijali:</p>
                            <input type="file" name="dodatno" placeholder="Izaberite dodatan fajl (Opciono)" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500  "/>
                        </div>
                      </div>
                    : null}                 

                    {props.parent == 'izmeniBlog' ? 
                      <div>  
                        <div className="m-5 p-2">
                            <input defaultValue={props.content.Title} type="text" name="Title" placeholder="Naslov" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500  "/>
                        </div>
                        <div className="m-5 p-2">
                            <input defaultValue={props.content.Autor} type="text" name="Autor" placeholder="Autor" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500  "/>
                        </div>
                        <div className="m-5 p-2">
                            <textarea defaultValue={props.content.Abstract} name="Abstract" onChange={e => {setCharCount(e.target.value.length)}} placeholder="Čujte i počujte, daje se na znanje..." className="block p-2.5 w-full h-40 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500  "></textarea>
                        </div>
                        <div>
                            <p className="text-gray-400 text-right text-xs pr-2 mr-5">{charCount}/1024</p>
                        </div>
                        <div className="m-5 p-2">
                            <input defaultValue={props.content.youtubeLink} type="text" name="youtubeLink" placeholder="Dodajte youtube link (Opciono)" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500  "/>
                        </div>
                      </div>
                    : null} 

                    {props.parent == 'zadaci' ? 
                      <div>  
                        <div className="m-5 p-2">
                            <input type="text" name="Title" placeholder="Naslov" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500  "/>
                        </div>
                        <div className="m-5 p-2">
                            <input  type="text" name="Autor" placeholder="Autor" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500  "/>
                        </div>
                        <div className="m-5 p-2">
                            <p>Pdf:</p>
                            <input type="file" name="pdf" placeholder="Izaberite pdf" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500  "/>
                        </div>
                      </div>
                    : null} 

                    {props.parent == 'izmeniZadatak' ? 
                      <div>  
                        <div className="m-5 p-2">
                            <input defaultValue={props.content.Title} type="text" name="Title" placeholder="Naslov" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500  "/>
                        </div>
                        <div className="m-5 p-2">
                            <input defaultValue={props.content.Autor} type="text" name="Autor" placeholder="Autor" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500  "/>
                        </div>
                      </div>
                    : null} 

                    {/* Do ovde se menja */}
                    {success == 200 ? 
                        <div>
                            <p className="text-green-400 text-center text-sm p-2">Uspešno objavljeno!</p>
                        </div> 
                    : null}
                    {success == 400 ? 
                        <div>
                            <p className="text-red-400 text-center text-sm p-2">Došlo je do greške!</p>
                        </div> 
                    : null}
                    {success == 401 ? 
                        <div>
                            <p className="text-red-400 text-center text-sm p-2">Samo slke formata .png, .jpeg i .jpg su dozvoljene!</p>
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
                        onClick={() => { setSuccess(0)}}
                        >
                        Objavi
                        </button>
                    </div>
                </form>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </div>
        : null);
}