import React, {Fragment} from 'react'
import ButtonWrapper from '../Helpers/ButtonWrapper/ButtonWrapper.js'

const ElementLSView = ({element, onClick, icon, containerStyle}) => {
    const {title, description, until, isSelected} = element

    return(
        <div>
            <ButtonWrapper isSelected={isSelected} onClick={onClick}>

            
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
                </div>
            </ButtonWrapper>

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

const styles = {
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
        backgroundColor: 'rgb(170, 170, 170)',
        height: '40px',
        width: '100%',
        zIndex: '5px'
    },

    container: {

    }
}


export default ElementLSView