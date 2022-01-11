import React, {Fragment} from 'react'
import InfluencingActorIcon from '../../assets/icons/InfluencingActorIcon.js'
import ElementLSView from '../Base/ElementLS.view.svg.js'

import { Gray0 } from '../../constants/Colors'

const InfluencingActorView = ({options,index,externalInfluence, onClick, className}) => {
    
    return(
            <Fragment>
                <ElementLSView 
                    options={options}
                    index={index} 
                    className={className} 
                    element={externalInfluence} 
                    onClick={onClick} 
                    SVG={InfluencingActorIcon} 
                    styling={btnStyles} 
                    type="influencingActor"
                    relTop={'1px'}
                    relLeft={'42px'}
                    
                    
                />
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