import React, { useEffect, useState } from 'react'
import './ButtonWrapper.css'


const ButtonWrapper = ({style, onClick, children}) => {



    return(

        <button onClick={onClick}>{children}</button>

    )
}

export default ButtonWrapper