import React from 'react'
import icon from "../../assets/goal-icon.png"
import ElementLSView from '../Base/ElementLS.view.js'

import { Gray1, Gray0 } from '../../constants/Colors'

const GoalView_deprecated = ({goal, onClick}) => {

    return(
            <ElementLSView element={goal} onClick={onClick} icon={icon} styling={btnStyles} type="goal"/>
    
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

const btnStyles = {
    isSelectedColor: {
        backgroundColor: Gray1    
    },
    isHoverColor: { 
        backgroundColor: 'rgb(216, 216, 216)'
    },
    normalColor: {
        backgroundColor: Gray0
    }
}



export default GoalView_deprecated