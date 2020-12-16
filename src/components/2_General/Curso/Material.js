import React from 'react';
import { Player, ControlBar } from 'video-react';

//------------------- 1.- CSS Style && .env ---------------
// Create styles
//------------------- 2.- Some functions ------------------
//------------------- 3.- PRINCIAPAL COMPONENT ------------
export default function Material({ materialIndex }) {
    const { tipo, linkOfMaterial } = materialIndex;
    //--------------------- 3.1- Functions---------------
    //---------------------- 3.2 Return------------------
    return (
        <>
            {tipo === 1
                ? (
                    <Player autoplay={false} className="curso_video" key={linkOfMaterial}>
                        <ControlBar autoHide={false} />
                        <source src={linkOfMaterial} type="video/mp4" />
                    </Player>
                ) : (
                    <div className="curso_video">
                        <object data={linkOfMaterial} type="application/pdf" width="100%" height="500vh" aria-labelledby="label1"/>
                    </div>
                )
            }
        </>
    );
}
//------------------- 4 Other components ------------------