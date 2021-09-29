import React, {Fragment} from 'react'
import ElementWrapper from '../Helpers/ElementWrapper'
import { Gray0, Gray1, Gray2, Gray3 } from '../../constants/Colors'
import PencilIcon from '../../assets/icons/PencilIcon'

import EditWrapper from './EditWrapper'
import RoleIcon from '../../assets/icons/RoleIcon'

const ElementLSView = ({options=[],editElement, textPosition="right", element, onClick, SVG, styling, type}) => {


    const maxLength = 20;

    const {isSelected} = element

    const isHover = false

    const {isHoverColor, isSelectedColor,normalColor } = styling
    
    var style

    if(isHover){
        style = isHoverColor
    } else if (isSelected){
        style = isSelectedColor
    } else {
        style = normalColor
    }

    
    
    var flexDirection
    var mLeft = '0px'
    var mTop = '0px'

    if(textPosition === 'down'){
        flexDirection = 'column'
        mTop = '0.5em'
        mLeft = '0px'
    } else {
        flexDirection = 'row'
        mLeft = '0.5em'
        mTop = '0px'
    }


    
    var width = '15em'

    let divColor;
    switch(type){
        case 'externalActor' || 'influencingActor':
            break;
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

    if(type === 'objective'){
        style = {
            ...style,
            borderTopLeftRadius:'3em',
            borderTopRightRadius: '3em',
            height: '100%',
            borderTopLeftRadius: '1.5em',
            borderBottomLeftRadius: '1.5em',
            borderTopRightRadius: '2.5em',
            borderBottomRightRadius: '2.5em',
        }

    } else if(type!== 'externalActor'){
        style = {
            ...style,
            borderTopLeftRadius:'3em',
            borderTopRightRadius: '3em',
            height: '100%'
    
        }
    }


    const styles = {
        personIcon: {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            marginLeft: '2em',
            marginRight: '1em'
        },
        icon: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        },
        elementStyle: {
            display: 'flex',
            flexDirection: flexDirection,
            marginTop: '0.7em',
            marginLeft: '1em'
        },
        content: {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            marginLeft: mLeft,
            marginTop: mTop,
            width: '7em',

           

        },
        btnIconStyle: {
            display: 'flex',
        },
        relativeDiv: {
            position: 'relative'
        },
    
        absoluteDiv: {
            position: 'absolute',
            top: '-4px',
            backgroundColor: divColor,
            height: '40px',
            width: '100%',
            zIndex: '5px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        },
        title: {
            display: 'flex',
            marginLeft: '1em'
        }
    }
    

    const renderRole = () => {
        var role;

        if(type === 'objective'){
            role = (
                <div style={styles.personIcon}>

                    <RoleIcon />
                    <div> {element.role.title} </div>

                </div>
            )
        }

        return role
    }


    const titleFx = () => {
        if(element.title.length >= maxLength){
            return `${element.title.substring(0, maxLength)}...`
        } else {
            return  element.title
        }
        
    }



    return(
        <div  >
            <ElementWrapper  element={element} onClick={onClick} style={style}>

            
                <div className="elementStyle" style={styles.elementStyle}>

                        <div style={styles.icon}>
                            {/** ICON ELEMENT SVG */}
                            <SVG />
                        </div>

                        <div style={styles.content}>
                            
                            <div>{titleFx()}</div>

                        </div>

                        <div style={{position: 'relative'}}>
                            <div 
                                style={{
                                    position: 'absolute',
                                    top: '-110px',
                                    left: '65px',
                                    display: isSelected ? 'flex' : 'none'
                                }}
                            >
                               <EditWrapper options={options} element={element} editElement={editElement} type={type} >
                                    <PencilIcon />
                                </EditWrapper>
                            
                            </div> 

                            
                        </div>

                        {renderRole()}
                </div>
            </ElementWrapper>

            {   isSelected && type !== 'objective' ?
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