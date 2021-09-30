import React from 'react'

import ExternalActorIcon from '../../assets/icons/ExternalActorIcon'

import ElementLSView from '../Base/ElementLS.view.svg'

import { Gray0, Gray1 } from '../../constants/Colors'

const ExternalActorView = ({externalActor, editElement, selectNode}) => {

    return(
            <ElementLSView textPosition={"down"} element={externalActor} onClick={selectNode} SVG={ExternalActorIcon} styling={btnStyles} type="externalActor"/>
    
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
        backgroundColor: Gray0    
    },
    isHoverColor: { 
        backgroundColor: Gray0
    },
    normalColor: {
        backgroundColor: Gray0
    }
}



export default ExternalActorView