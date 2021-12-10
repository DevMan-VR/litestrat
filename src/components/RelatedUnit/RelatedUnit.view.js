import React, {Fragment} from 'react'
import RelatedUnitIcon from '../../assets/icons/RelatedUnitIcon'
import ElementLSView from '../Base/ElementLS.view.svg.js'

import { Gray0 } from '../../constants/Colors'

const RelatedUnitView = ({relatedUnit, onClick, className}) => {
    
    return(
            <Fragment>
                <ElementLSView className={className} relLeft={'40px'} element={relatedUnit} onClick={onClick} SVG={RelatedUnitIcon} styling={btnStyles} type="relatedUnit"/>
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