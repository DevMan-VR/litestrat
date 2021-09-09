import React from 'react'
import icon from "../../assets/objective-icon.png"

import ElementLSView from '../Base/ElementLS.view.js'

const ObjectiveView = ({objective, onClick}) => {
    return(
        <ElementLSView element={objective} onClick={onClick} icon={icon} containerStyle={styles.containerStyle}/> 
    )
}

const styles = {
    containerStyle: {
        display: 'flex',
        marginRight: '3em',
    }
}


export default ObjectiveView