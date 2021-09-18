import React, {Fragment} from 'react'
import ExternalActorIcon from '../../assets/icons/ExternalActorIcon.js'

import ElementLSView from '../Base/ElementLS.view.js'

import { Gray0 } from '../../constants/Colors'

const ExternalActorView_deprecated = ({externalActor, onClick}) => {
    return(

            <ElementLSViewSVG element={externalActor} onClick={onClick} SVG={ExternalActorIcon} styling={btnStyles} type="externalActor"/>

        
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
        backgroundColor: Gray0  
    },
    isHoverColor: { 
        backgroundColor: 'rgb(216, 216, 216)'
    },
    normalColor: {
        backgroundColor: Gray0
    }
}


export default ExternalActorView_deprecated