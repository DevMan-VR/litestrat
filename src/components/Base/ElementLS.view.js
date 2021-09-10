import React from 'react'
import ButtonWrapper from '../Helpers/ButtonWrapper/ButtonWrapper.js'

const ElementLSView = ({element, onClick, icon, containerStyle}) => {
    const {title, description, until, isSelected} = element

    return(

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
    }
}


export default ElementLSView