import React from 'react'
import btnIcon from '../../assets/btn-icon.png'
import styled from 'styled-components'
import ButtonWrapper from './ButtonWrapper/ButtonWrapper.js'

const AddBtn = ({icon, title, description, addElement, type}) => {

    return(
            <div style={styles.containerStyle}>

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
                    <div style={styles.btnIconStyle}>
                        {/** ICON BTN */}
                        <ButtonWrapper addElement={addElement} type={type}>
                            <img src={btnIcon} alt="ADD" />
                        </ButtonWrapper>
                        
                    </div>
                        
                </div>

            </div>
    )
}

const styles = {
    containerStyle: {
        display: 'flex',
        opacity: 0.3,
        //backgroundColor: '#dcdcdc'
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
        justifyContent: 'center',
    },
    btnIconStyle: {
        display: 'flex',
        
    }
}

const btnStyles = {
    isSelectedColor: {
        backgroundColor: 'rgb(170, 170, 170)'    
    },
    isHoverColor: { 
        backgroundColor: 'rgb(216, 216, 216)'
    },
    normalColor: {
        backgroundColor: 'white'
    }
}




export default AddBtn;