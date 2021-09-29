import React from 'react'
import PlusButtonIcon from '../../../assets/icons/PlusButtonIcon.js'
import AddBtnWrapper from './AddBtnWrapper.js'

const AddBtnSVG_1 = ({SVG, title, addElement, type}) => {

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
                        <AddBtnWrapper addElement={addElement} type={type}>
                            <PlusButtonIcon/>
                        </AddBtnWrapper>
                            
                        
                        
                    </div>
                        
                </div>

            </div>
    )
}

var styles = {
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






export default AddBtnSVG_1;