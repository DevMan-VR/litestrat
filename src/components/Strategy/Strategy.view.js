import React from 'react'

import ElementLSView from '../Base/ElementLS.view.svg.js'

import StrategyIcon from '../../assets/icons/StrategyIcon.js'

import { Gray1, Gray2 } from '../../constants/Colors'

const StrategyView = ({strategy, onClick, relTop, relLeft, index}) => {
    return(
        <ElementLSView 
            element={strategy} 
            onClick={onClick} 
            SVG={StrategyIcon} 
            styling={btnStyles} 
            type="strategy"
            relTop={relTop}
            relLeft={relLeft}
            index={index}
        /> 
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