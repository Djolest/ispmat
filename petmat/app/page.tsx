/*import { useState } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';

import { addMessage, getMessages } from './lib/server/appwrite';*/

/*import { useContext, createContext, useState } from "react";

const isSaradnikContext = createContext(false);*/

import Link from "next/link";

export default function Home() {
  /*const [input, setInput] = useState('');

  const queryClient = useQueryClient();

  const addMessageMutation = useMutation({mutationFn: addMessage});
  const { data: messages } = useQuery({ queryKey: ['todos'], queryFn: getMessages });*/

  //const [isSaradnik, setSaradnik] = useState(false); 

  return (
    <div className="flex h-screen">
        <div className="m-auto">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl" >
            <div className="text-center m-4">Dobro došli na sajt</div>
            <div className="text-center m-4">seminara matematike u Petnici!</div>
          </h1>
          
          <div className="flex-col text-black">
            <p className="text-center m-2">Pročitajte najnovije vesti na linku {' '}
              <Link href='/novosti' className="underline"> novosti </Link>
            </p>
            <p className="text-center m-2">Pogledajte predavanja, seminarske, projekte i ostale materijale na linku {' '}
              <Link href='/materijali'className="underline" > materijali </Link>
            </p>
            <p className="text-center m-2">Pogledajte galeriju slika sa seminara na linku {' '}
              <Link href='/galerija' className="underline"> galerija </Link>
            </p>
            <p className="text-center m-2">Upoznajte saradnički tim seminara na linku {' '}
              <Link href='/onama' className="underline"> o nama </Link>
            </p>
          </div>
        </div>
    </div>
  );
}
