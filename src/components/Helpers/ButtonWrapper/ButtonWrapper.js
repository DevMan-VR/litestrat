import React, { useEffect, useState } from 'react'
import './ButtonWrapper.css'


const ButtonWrapper = ({onClick, children}) => {

    //const [isHover, setIsHover] = useState(false)
    

    

    return(

        <button
        onClick={
            onClick
        }>{children}</button>

    )
}




export default ButtonWrapper