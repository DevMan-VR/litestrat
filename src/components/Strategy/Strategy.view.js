import React from 'react'
import icon from "../../assets/strategy-icon.png"

import ElementLSView from '../Base/ElementLS.view.js'

const StrategyView = ({strategy, onClick}) => {
    return(
        <ElementLSView element={strategy} onClick={onClick} icon={icon} containerStyle={styles.containerStyle}/> 
    )
}

const styles = {
    containerStyle: {
        display: 'flex',
        marginRight: '3em',
    }
}


export default StrategyView