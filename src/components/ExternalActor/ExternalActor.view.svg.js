import React, {Fragment} from 'react'
import ExternalActorIcon from '../../assets/icons/ExternalActorIcon.js'

import ElementLSView from '../Base/ElementLS.view.svg.js'

import { Gray0 } from '../../constants/Colors'

const ExternalActorView = ({externalActor, onClick}) => {
    return(
            <Fragment>
                <ElementLSView textPosition="down" element={externalActor} onClick={onClick} SVG={ExternalActorIcon} styling={btnStyles} type="externalActor"/>
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


export default ExternalActorView