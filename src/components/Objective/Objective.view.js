import React from 'react'
import ObjectiveIcon from '../../assets/icons/ObjectiveIcon'

import ElementLSView from '../Base/ElementLS.view.svg.js'

import { Gray3, Gray0 } from '../../constants/Colors'

const ObjectiveView = ({objective, onClick}) => {

    console.log("OBJECTIVE IN OBJECTIVEVIEW IS: ", objective)
    return(
        <div style={styles.containerStyle}>
            <ElementLSView element={objective} onClick={onClick} SVG={ObjectiveIcon} styling={btnStyles} type="objective"/> 

        </div>  
    )
}

const styles = {
    containerStyle: {
        boxSizing: 'border-box', 
        border: '0.2em solid #838383', 
        borderTopLeftRadius: '1.5em',
        borderBottomLeftRadius: '1.5em',
        borderTopRightRadius: '2.5em',
        borderBottomRightRadius: '2.5em',
        borderStyle: 'dashed',
        marginRight: '1em'
    }
}

const btnStyles = {
    isSelectedColor: {
        backgroundColor: Gray3 ,
    },
    isHoverColor: { 
        backgroundColor: 'rgb(216, 216, 216)',
    },
    normalColor: {
        backgroundColor: Gray3,

    }
}



export default ObjectiveView