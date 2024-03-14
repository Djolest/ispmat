'use client'

import { useContext } from "react"
import { isSaradnikContext } from "../layout"

export default function NovostiPage() {
    const isSaradnik = useContext(isSaradnikContext);
    return (
        <p>Novosti! {isSaradnik.toString()}</p>
    )
}