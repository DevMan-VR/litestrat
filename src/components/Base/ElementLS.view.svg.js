import React, {Fragment} from 'react'
import ElementWrapper from '../Helpers/ElementWrapper'
import { Gray0, Gray1, Gray2, Gray3 } from '../../constants/Colors'
import PencilIcon from '../../assets/icons/PencilIcon'

import EditWrapper from './EditWrapper'
import RoleIcon from '../../assets/icons/RoleIcon'
import TeamIcon from '../../assets/icons/TeamIcon'

import goodTime from '../../assets/png/goodTime.png'
import warningTime from '../../assets/png/warningTime.png'
import badTime from '../../assets/png/badTime.png'
import { addSeconds } from 'date-fns'

const ElementLSView = ({options,textPosition="right", element, onClick, SVG, styling, type, index, relTop, relLeft, className}) => {


    const maxLength = 20;

    const goodRange = 7; //days
    const warningRange = 3; //days

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
        mTop = '0px'
        mLeft = '0px'
    } else {
        flexDirection = 'row'
        mLeft = '0.5em'
        mTop = '0px'
    }

    let widthText
    let mRight
    if(type === 'relatedUnit'){
        widthText = '7em'
        mRight = '0em'
        
    } else if(type === 'externalInfluence'){
        widthText = '7em'
        mRight = '2em'

    } else {
        widthText = '9em'
        mRight = '2em'
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
            //borderTopLeftRadius:'3em',
            ///borderTopRightRadius: '3em',
            height: '100%',
            //borderTopLeftRadius: '1.5em',
            //borderBottomLeftRadius: '1.5em',
            //borderTopRightRadius: '2.5em',
            //borderBottomRightRadius: '2.5em',
            display: 'flex',
            justifyContent:'center',
            alignItems: 'center'
        }

    } else if(type!== 'externalActor'){
        style = {
            ...style,
            borderTopLeftRadius:'3em',
            borderTopRightRadius: '3em',
            height: '100%'
    
        }
    }
    
    let specialTop
    if(type === 'objective'){
        specialTop = '0px'
    } else {
        specialTop = '0.4em'
    }

    const styles = {
        personIcon: {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            marginLeft: '1em',
            marginRight: '1em',
            width: '5em'
        },
        icon: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        },
        elementStyle: {
            display: 'flex',
            flexDirection: flexDirection,
            marginTop: specialTop,
            marginLeft: '1em'
        },
        content: {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            marginLeft: mLeft,
            marginTop: mTop,
            width: widthText,
            marginRight: mRight

        },
        btnIconStyle: {
            display: 'flex',
        },
        relativeDiv: {
            position: 'relative'
        },
    
        absoluteDiv: {
            position: 'absolute',
            top: '80px',
            backgroundColor: divColor,
            height: '65px',
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
    

    const renderRoleOrTeam = () => {
        var roleOrTeam;

        if(type === 'objective'){ //Role case
            roleOrTeam = (
                <div style={styles.personIcon}>

                    <RoleIcon />
                    <div> {element.role.title} </div>

                </div>
            )
        } else if(type === 'tactic'){ // Team case
            roleOrTeam = (
                <div style={styles.personIcon}>

                    <TeamIcon />
                    <div> {element.team.title} </div>

                </div>
            )
        }

        return roleOrTeam
    }


    const titleFx = () => {
        if(element.title.length >= maxLength){
            return element.title//`${element.title.substring(0, maxLength)}...`
        } else {
            return  element.title
        }
        
    }


    const hasTimeDuration = () => {
        if(element.until === null){
            return false;
        }

        let hasDuration = false;
        switch(type){
            case 'goal': hasDuration = true; break;
            case 'strategy': hasDuration = true; break;
            case 'tactic' : hasDuration = true; break;
            case 'objective': hasDuration = true; break;
        }

        return hasDuration
    }

    const addDays = (date, days) => {
        var result = new Date(date);
        result.setDate(result.getDate() + days);
        return result;
      }


    let imgTimeIcon
    if(hasTimeDuration()){


        let today = new Date()
        if(element.until >= addDays(today,goodRange)){
            imgTimeIcon = goodTime

        } else if (element.until < addDays(today,goodRange) && element.until >= addDays(today,warningRange)){
            //WARNING TIME RANGE
            imgTimeIcon = warningTime
            

        } else if(element.until < addDays(today,warningRange)){
            //BAD TIME RANGE
            imgTimeIcon = badTime
        }

    }
/*
    let isSelected = false
    if(type === 'goal' && element.isSelected){
        isSelected = true;
    } else if (type === 'strategy' && element.isSelected){
        isSelected = true;
    } else if (type === 'tactic' && element.isSelected){
        isSelected = true;
    }else if (type === 'objective' && element.isSelected){
        isSelected = true;
    }else if (type === 'externalActor' && element.isSelected){
        isSelected = true;

*/
            
    let isCurrentSelected = false
    if(type === 'goal' && element.currentSelect){
        isCurrentSelected = true;
    } else if (type === 'strategy' && element.currentSelect){
        isCurrentSelected = true;
    } else if (type === 'tactic' && element.currentSelect){
        isCurrentSelected = true;
    }else if (type === 'objective' && element.currentSelect){
        isCurrentSelected = true;
    }else if (type === 'externalActor' && element.currentSelect){
        isCurrentSelected = true;
    }else if (type === 'relatedUnit' && element.currentSelect){
        isCurrentSelected = true;

    } else if (type === 'influencingActor' && element.currentSelect){
        isCurrentSelected = true;
    
    
    } 


    console.log("Current select inside elementLS")
    console.log("type is: ", type)
    console.log("element is current selected is: ", element.isCurrentSelected)
    console.log("element is: ", element)


    let containerWrapperStyle

    if(type === 'objective'){
        containerWrapperStyle =  {width: '100%', height: '100%'}
    } else {
        containerWrapperStyle = {}
    }


    let durationIconLeftPos
    let durationIconTopPos

    if(type === 'tactic'){
        durationIconLeftPos = '305px'
        durationIconTopPos = '5px'

    } else if(type === 'objective'){
        durationIconLeftPos = '295px'
        durationIconTopPos = '-8px'
    } else {
        durationIconLeftPos = '210px'
        durationIconTopPos = '10px'
    }


    console.log("My type is: ", type)
    console.log("has duration is: ", hasTimeDuration())
    console.log("is selected is: ", isSelected)
    console.log("element is: ", element)
    return(
        <div className="EDITWRAPPER" style={containerWrapperStyle}  >

            {/*   Este div conecta al elemento con el div de su categoria */}
            {
            
                isSelected && type !== 'objective' ?
                    <div style={styles.relativeDiv}>
                        <div style={styles.absoluteDiv}>
                     
                        </div>
                    </div>
                :
                    <Fragment></Fragment>
            } 

            {
                hasTimeDuration() && isSelected ?
                (
                    <div className="ElementRelContainerTime" style={{display:'flex', position:'relative'}}>
                        <div className="ElementAbsContainerTime"style={{display:'flex', position: 'absolute', left: durationIconLeftPos, top: durationIconTopPos}}>
                            <img src={imgTimeIcon} />
                        </div>
                    </div>
                ) 
                :
                (
                    <Fragment/>
                )
            }

            {
                
                    
                isCurrentSelected ?
                (
                    <div style={{position: 'relative'}}>
                        <div 
                            style={{
                                position: 'absolute',
                                top: relTop,
                                left: relLeft,
                                display: 'flex',
                                zIndex: 50,
                                
                                
                            }}
                        >
                            <EditWrapper options={options} index={index}  element={element} type={type}>
                                <PencilIcon />
                            </EditWrapper>
                        </div>
                    </div> 
    

                ) : <Fragment/>
            }
               

            
            
            <ElementWrapper className={className}  element={element} onClick={onClick} style={style}>

            
                <div className="elementStyle" style={styles.elementStyle}>

                        <div style={styles.icon}>
                            {/** ICON ELEMENT SVG */}
                            <SVG />
                        </div>

                        <div style={styles.content}>
                            
                            <div><p>{titleFx()}</p></div>

                        </div>

                        

                        {renderRoleOrTeam()}
                </div>
            </ElementWrapper>

            

            
            
                        
        </div>
    )
}






export default ElementLSView