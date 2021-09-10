import React, { useEffect, useState } from 'react'
import './ButtonWrapper.css'


const ButtonWrapper = ({isSelected, onClick, children}) => {

    const [isHover, setIsHover] = useState(false)

    var style
    if(isHover){
        style = styles.isHover
    } else if (isSelected){
        style = styles.isSelected
    } else {
        style = styles.normal
    }

    return(

        <button style={style} 
        onClick={
            onClick
        }>{children}</button>

    )
}


const styles = {
    isSelected: {
        backgroundColor: 'rgb(170, 170, 170)'    
    },
    isHover: { 
        backgroundColor: 'rgb(216, 216, 216)'
    },
    normal: {
        backgroundColor: 'white'
    }
}

export default ButtonWrapper