import React from 'react'
import icon from "../../assets/tactic-icon.png"

import ElementLSView from '../Base/ElementLS.view.js'

const TacticView = ({tactic, onClick}) => {
    return(
        <ElementLSView element={tactic} onClick={onClick} icon={icon} containerStyle={styles.containerStyle}/> 
    )
}

const styles = {
    containerStyle: {
        display: 'flex',
        marginRight: '3em',
    }
}


export default TacticView