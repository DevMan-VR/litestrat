import React, { useEffect, useState } from 'react'
import './ButtonWrapper.css'


const ElementWrapper = ({onClick, children, style}) => {

    //const [isHover, setIsHover] = useState(false)
    

    

    return(

        <button style={style}
        onClick={
            onClick
        }>{children}</button>

    )
}




export default ElementWrapper