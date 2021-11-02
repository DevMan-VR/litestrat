import React, {Fragment} from 'react'
import TeamIcon from '../../assets/icons/OrganizationIcon'

import ElementLSView from '../Base/ElementLS.view.svg.js'

import { Gray0 } from '../../constants/Colors'

const RelatedUnitView = ({relatedUnit, onClick}) => {
    
    return(
            <Fragment>
                <ElementLSView element={relatedUnit} onClick={onClick} SVG={TeamIcon} styling={btnStyles} type="RelatedUnit"/>
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


export default RelatedUnitView