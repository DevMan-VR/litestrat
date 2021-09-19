import React from 'react'

import ElementLSView from '../Base/ElementLS.view.svg.js'

import { Gray2, Gray3 } from '../../constants/Colors'
import TacticIcon from '../../assets/icons/TacticIcon.js'


const TacticView = ({tactic, onClick}) => {
    return(
        <ElementLSView element={tactic} onClick={onClick} SVG={TacticIcon} styling={btnStyles} type="tactic"/> 

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
        backgroundColor: Gray2
    }
}



export default TacticView