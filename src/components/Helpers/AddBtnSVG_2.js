import React from 'react'
import PlusButtonIcon from '../../assets/icons/PlusButtonIcon.js'
import styled from 'styled-components'
import ButtonWrapper from './ButtonWrapper/ButtonWrapper.js'

const AddBtnSVG_2 = ({SVG, title, description, addElement, type}) => {

    return(
            <div style={styles.containerStyle}>

                <div style={styles.icon}>
                    {/** ICON ELEMENT */}
                    <SVG />
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
                            <PlusButtonIcon/>
                        </ButtonWrapper>
                        
                    </div>
                        
                </div>

            </div>
    )
}

const styles = {
    containerStyle: {
        display: 'flex',
        opacity: 0.4,
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




export default AddBtnSVG_2;