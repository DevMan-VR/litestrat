import React, { Fragment } from 'react'
import icon from "../../assets/goal-icon.png"

import ElementLSView from '../Base/ElementLS.view.js'

const GoalView = ({goal, isSelected, onClick}) => {

    

    return(
    
        <div>
            <ElementLSView element={goal} onClick={onClick} icon={icon} style={styles.containerStyle}/> 
            <div>
                <div>
                    <p>Hola mundo</p>
                </div>
            </div>
        </div>
    
    )
}

const styles = {
    containerStyle: {
        display: 'flex',
        flexDirection: 'row',
        marginRight: '3em'
        //backgroundColor: '#dcdcdc'
    }
}


export default GoalView