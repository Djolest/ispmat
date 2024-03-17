'use client';

import { useState } from "react";
import PlusButton from "./plusButton";
import Modals from "./modals";
import { getter } from "../lib/autho";

export default function ModalButton (props: any) {
    const [showModal, setShowModal] = useState(false);

    return (
        <div>
            { getter() ? <PlusButton setShowModal={setShowModal} /> : null}
            <Modals 
                showModal={showModal}
                setShowModal={setShowModal}
                parent={props.parent}
            />
        </div>);
}