import React from 'react'

import GoalIcon from '../../assets/icons/GoalIcon'

import ElementLSView from '../Base/ElementLS.view.svg'

import { Gray1, Gray0 } from '../../constants/Colors'

const GoalView = ({goal, onClick, index,relTop,relLeft, className}) => {

    return(
            <ElementLSView 
                className="GoalElement" 
                element={goal} 
                onClick={onClick} 
                SVG={GoalIcon} 
                styling={btnStyles} 
                type="goal"
                index={index}
                relTop={relTop}
                relLeft={relLeft}
                className={className}
            />
    
    )
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



export default GoalView