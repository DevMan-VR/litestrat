import React from 'react'
import icon from "../../assets/strategy-icon.png"

import ElementLSView from '../Base/ElementLS.view.js'

import { Gray1, Gray2 } from '../../constants/Colors'

const StrategyView = ({strategy, onClick}) => {
    return(
        <ElementLSView element={strategy} onClick={onClick} icon={icon} styling={btnStyles} type="strategy"/> 
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
        backgroundColor: Gray2  
    },
    isHoverColor: { 
        backgroundColor: 'rgb(216, 216, 216)'
    },
    normalColor: {
        backgroundColor: Gray1
    }
}


export default StrategyView