import React from 'react'
import ObjectiveIcon from '../../assets/icons/ObjectiveIcon'

import ElementLSView from '../Base/ElementLS.view.svg.js'

import { Gray3, Gray0 } from '../../constants/Colors'

const ObjectiveView = ({objective, onClick}) => {
    return(
        <ElementLSView element={objective} onClick={onClick} SVG={ObjectiveIcon} styling={btnStyles} type="objective"/> 
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
        backgroundColor: Gray3 ,
    },
    isHoverColor: { 
        backgroundColor: 'rgb(216, 216, 216)',
    },
    normalColor: {
        backgroundColor: Gray3,

    }
}



export default ObjectiveView