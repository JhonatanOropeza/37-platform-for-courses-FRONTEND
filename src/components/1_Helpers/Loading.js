import React from 'react';
import ClipLoader from "react-spinners/ClipLoader";

export default function Loading({tamano}) {
    let newTamano = 0;
    tamano >= 0 ? (tamano = tamano) : (tamano = 150);
    return (
        <div className="sweet-loading">
            <ClipLoader
                size={tamano}
                color={"#123abc"}
            />
        </div>
    );
}