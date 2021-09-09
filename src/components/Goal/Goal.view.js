import React from 'react'
import icon from "../../assets/goal-icon.png"

import ElementLSView from '../Base/ElementLS.view.js'

const GoalView = ({goal, onClick}) => {
    return(
        <ElementLSView element={goal} onClick={onClick} icon={icon} containerStyle={styles.containerStyle}/> 
    )
}

const styles = {
    containerStyle: {
        display: 'flex',
        marginRight: '3em'
        //backgroundColor: '#dcdcdc'
    }
}


export default GoalView