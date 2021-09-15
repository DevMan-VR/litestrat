import React from 'react';
import './ButtonWrapper/ButtonWrapper.css'


const ElementWrapper = ({onClick, children, style}) => {



    return(

    <div >
        <button style={style} onClick={onClick}>{children}</button>
    </div>
    )
}

export default ElementWrapper