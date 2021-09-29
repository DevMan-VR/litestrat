import React, {Fragment} from 'react'
import ExternalActorIcon from '../../assets/icons/ExternalActorIcon.js'

import ElementLSView from '../Base/ElementLS.view.svg.js'

import { Gray0 } from '../../constants/Colors'

const InfluencingActorView = ({influencingActor, onClick}) => {
    
    return(
            <Fragment>
                <ElementLSView element={influencingActor} onClick={onClick} SVG={ExternalActorIcon} styling={btnStyles} type="influencingActor"/>
            </Fragment>

        
    )
}

const styles = {
    containerStyle: {
        display: 'flex',
        marginRight: '1em',
    }
}

const btnStyles = {
    isSelectedColor: {
        backgroundColor: 'none'
    },
    isHoverColor: { 
        backgroundColor: 'none'
    },
    normalColor: {
        backgroundColor: 'unset'
    }
}


export default InfluencingActorView