import React from 'react'
import icon from "../../assets/goal-icon.png"

import ElementLSView from '../Base/ElementLS.view.js'

const GoalView = ({goal, onClick}) => {

    return(
            <ElementLSView element={goal} onClick={onClick} icon={icon} style={styles.containerStyle}/>
    
    )
}

const styles = {
    containerStyle: {
        display: 'flex',
        flexDirection: 'row',
        marginRight: '3em'
        //backgroundColor: '#dcdcdc'
    },


}


export default GoalView