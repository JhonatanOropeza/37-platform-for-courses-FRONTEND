import React from 'react';
import ClipLoader from "react-spinners/ClipLoader";

export default function Loading(){
    return(
        <div className="sweet-loading">
            <ClipLoader
                size={150}
                color={"#123abc"}
            />
        </div>
    );
}