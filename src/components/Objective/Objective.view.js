import React from 'react'
import icon from "../../assets/objective-icon.png"

import ElementLSView from '../Base/ElementLS.view.js'

import { Gray3, Gray0 } from '../../constants/Colors'

const ObjectiveView = ({objective, onClick}) => {
    return(
        <ElementLSView element={objective} onClick={onClick} icon={icon} styling={btnStyles} type="objective"/> 
    )
}

const styles = {
    containerStyle: {
        display: 'flex',
        marginRight: '3em',
    }
}

const btnStyles = {
    isSelectedColor: {
        backgroundColor: Gray3   
    },
    isHoverColor: { 
        backgroundColor: 'rgb(216, 216, 216)'
    },
    normalColor: {
        backgroundColor: Gray3
    }
}



export default ObjectiveView