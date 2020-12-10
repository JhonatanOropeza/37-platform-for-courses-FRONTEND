import React from 'react';

export default function Main({X_Y_Centered, children }) {
 
    let classess = `${X_Y_Centered ? 'Main_Centered d-flex'  : 'border border-dark'}`;

    return(
        <main style={{paddingTop: '3.4rem', paddingBottom: '25px'}} className={classess}>{children}</main>
    );
}