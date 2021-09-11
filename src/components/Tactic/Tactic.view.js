import React from 'react'
import icon from "../../assets/tactic-icon.png"

import ElementLSView from '../Base/ElementLS.view.js'

import { Gray2, Gray3 } from '../../constants/Colors'


const TacticView = ({tactic, onClick}) => {
    return(
        <ElementLSView element={tactic} onClick={onClick} icon={icon} styling={btnStyles} type="tactic"/> 
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