import React, {Fragment} from 'react'
import ElementWrapper from '../Helpers/ElementWrapper'
import { Gray1, Gray2, Gray3 } from '../../constants/Colors'

import personIcon from '../../assets/person.png'

const ElementLSView = ({element, onClick, icon, styling, type}) => {
    const {title, description, until, isSelected} = element

    const isHover = false
    let isTactic = false
    let isObjective = false

    console.log("SOY EL STYLING EN ELMENTLS VIEW: ", styling)

    const {isHoverColor, isSelectedColor,normalColor } = styling
    var style

    if(isHover){
        style = isHoverColor
    } else if (isSelected){
        style = isSelectedColor
    } else {
        style = normalColor
    }


    console.log("STYLE IS: ", style)

    let divColor;
    switch(type){
        case 'goal':
            divColor = Gray1;
            break;
        
        case 'strategy': 
            divColor = Gray2;
            break;
        
        case 'tactic':
            divColor = Gray3;
        
        case 'objective':
            divColor = Gray3;
    }

    const styles = {
        personIcon: {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            marginLeft: '2em'
        },
        icon: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        },
        elementStyle: {
            display: 'flex',
            flexDirection: 'row'
        },
        content: {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center'
        },
        btnIconStyle: {
            display: 'flex',
        },
        relativeDiv: {
            position: 'relative'
        },
    
        absoluteDiv: {
            position: 'absolute',
            top: '-5px',
            backgroundColor: divColor,
            height: '40px',
            width: '100%',
            zIndex: '5px'
        },
    }
    

    const renderRole = () => {
        var role;

        if(type === 'objective'){
            role = (
                <div style={styles.personIcon}>

                    <img src={personIcon} alt="person"/>
                    <div> Role 1 </div>

                </div>
            )
        }

        return role
    }
    return(
        <div>
            <ElementWrapper element={element} isSelected={isSelected} onClick={onClick} style={style}>

            
                <div style={styles.elementStyle}>

                        <div style={styles.icon}>
                            {/** ICON ELEMENT */}
                            <img src={icon} alt="ICON" />
                        </div>
                        <div style={styles.elementStyle}>
                            <div style={styles.content}>
                                {/** TITLE ELEMENT */}
                                <div>{title}</div>

                                {/** DESCRIPTION ELEMENT */}
                                <div>{description}</div>
                            </div>
                                
                        </div>


                        {renderRole()}
                </div>
            </ElementWrapper>

            {   isSelected ?
                    <div style={styles.relativeDiv}>
                        <div style={styles.absoluteDiv}>
                     
                        </div>
                    </div>
                :
                    <Fragment></Fragment>
            } 
        </div>
    )
}






export default ElementLSView