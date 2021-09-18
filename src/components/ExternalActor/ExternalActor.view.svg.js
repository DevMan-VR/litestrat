import React, {Fragment} from 'react'
import ExternalActorIcon from '../../assets/icons/ExternalActorIcon.js'

import ElementLSView from '../Base/ElementLS.view.svg.js'

import { Gray0 } from '../../constants/Colors'

const ExternalActorView = ({externalActor, onClick}) => {
    return(
            <Fragment>
                <ElementLSView element={externalActor} onClick={onClick} SVG={ExternalActorIcon} styling={btnStyles} type="externalActor"/>
                <div style={{display: 'flex', alignItems: 'center', justifyContent:'center'}}>{externalActor.title}</div>
            </Fragment>

        
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
        backgroundColor: 'none'
    },
    isHoverColor: { 
        backgroundColor: 'none'
    },
    normalColor: {
        backgroundColor: 'white'
    }
}


export default ExternalActorView