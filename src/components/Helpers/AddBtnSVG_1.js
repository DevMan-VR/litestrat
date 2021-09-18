import React from 'react'
import PlusButtonIcon from '../../assets/icons/PlusButtonIcon.js'
import styled from 'styled-components'
import ButtonWrapper from './ButtonWrapper/ButtonWrapper.js'

const AddBtnSVG_1 = ({SVG, title, description, addElement, type}) => {

    return(
            <div style={styles.containerStyle}>

                <div style={styles.icon}>
                    {/** ICON ELEMENT */}
                    <SVG />
                    {/** TITLE ELEMENT */}
                    <div style={styles.content}>{title}</div>
                </div>
                <div style={styles.elementStyle}>
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
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        
    },
    elementStyle: {
        display: 'flex',
        flexDirection: 'row'
    },
    content: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        width: '7em',
        marginTop: '0.5em'
    },
    btnIconStyle: {
        display: 'flex',
        alignItems: 'center',
        marginBottom: '2.7em'
        
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




export default AddBtnSVG_1;