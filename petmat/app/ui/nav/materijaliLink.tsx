'use client';

import { useState } from "react";
import Link from "next/link";

export default function MaterijaliLink() {
    //const [showDropdown, setShowDropdown] = useState(false);
    
    return (
        <>
            {/** Temporary solution */}
            <Link href="/materijali/predavanja">Materijali sa predavanja</Link>
            <Link href="/materijali/projekti">Materijali za projekte</Link>
            {/*<div className="relative ms-2" data-twe-dropdown-ref>
                <div
                    className="flex items-center px-6 pb-2 pt-2.5  transition duration-200  hover:ease-in-out  motion-reduce:transition-none lg:px-2 cursor-pointer"
                    onClick={() => setShowDropdown(!showDropdown)}
                    aria-expanded="false">
                    Materijali
                    <span className="ms-2 [&>svg]:w-5">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor">
                        <path
                        fillRule="evenodd"
                        d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                        clipRule="evenodd" />
                    </svg>
                    </span>
                </div>
                {showDropdown ? 
                    <ul
                        className="absolute z-[1000] float-left m-0 hidden min-w-max list-none overflow-hidden rounded-lg border-none bg-white bg-clip-padding text-left text-base shadow-lg data-[twe-dropdown-show]:block dark:bg-surface-dark"
                        aria-labelledby="dropdownMenuButton1"
                        data-twe-dropdown-menu-ref>
                        <li>
                        <Link
                            className="block w-full whitespace-nowrap bg-white px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-zinc-200/60 focus:bg-zinc-200/60 focus:outline-none active:bg-zinc-200/60 active:no-underline dark:bg-surface-dark dark:text-white dark:hover:bg-neutral-800/25 dark:focus:bg-neutral-800/25 dark:active:bg-neutral-800/25"
                            href="/materijali/predavanja"
                            data-twe-dropdown-item-ref
                            >sa predavanja</Link>
                        </li>
                        <li>
                        <Link
                            className="block w-full whitespace-nowrap bg-white px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-zinc-200/60 focus:bg-zinc-200/60 focus:outline-none active:bg-zinc-200/60 active:no-underline dark:bg-surface-dark dark:text-white dark:hover:bg-neutral-800/25 dark:focus:bg-neutral-800/25 dark:active:bg-neutral-800/25"
                            href="/materijali/projetki"
                            data-twe-dropdown-item-ref
                            >za projekte</Link>
                        </li>
                    </ul>
                : null }
                </div>*/}
    </>
    );
}