import React from 'react';
import { Player, ControlBar } from 'video-react';

import documentA1 from '../../../images/documentsPDF/CursoA1.pdf';

//------------------- 1.- CSS Style && .env ---------------
// Create styles
//------------------- 2.- Some functions ------------------
//------------------- 3.- PRINCIAPAL COMPONENT ------------
export default function Material() {
    //--------------------- 3.1- Functions---------------
    //---------------------- 3.2 Return------------------
    const tipoDeMaterial = 'PDF';
    return (
        <>
            {tipoDeMaterial === 'PDF' &&
                <div className="curso_video">
                    <object data={documentA1} type="application/pdf" width="100%" height="500vh">
    
                    </object>
                </div>
            }
            {tipoDeMaterial === 'video' &&
                <div className="curso_video">
                    <Player autoplay width="75%">
                        <source src='' />
                        <ControlBar autoHide={false} className="my-class" />
                    </Player>
                </div>
            }
        </>


    );
}
//------------------- 4 Other components ------------------