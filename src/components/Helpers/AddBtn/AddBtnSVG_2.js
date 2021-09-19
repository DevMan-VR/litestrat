import React from 'react'
import PlusButtonIcon from '../../../assets/icons/PlusButtonIcon.js'
import AddBtnWrapper from './AddBtnWrapper.js'

const AddBtnSVG_2 = ({isFirst, SVG, title, addElement, type}) => {

    var addBtn

    if(isFirst){
       addBtn = ( 
           
            <div style={styles.containerStyle}>

                <div style={styles.icon}>
                    {/** ICON ELEMENT */}
                    <SVG />
                </div>
                <div style={styles.elementStyle}>
                    <div style={styles.content}>
                        {/** TITLE ELEMENT */}
                        <div>{title}</div>
                        
                    </div>
                    <div style={styles.btnIconStyle}>
                        {/** ICON BTN */}
                        <AddBtnWrapper addElement={addElement} type={type}>
                            <PlusButtonIcon/>
                        </AddBtnWrapper>
                        
                    </div>
                        
                </div>

            </div>
       )

    } else {
        addBtn = (
            <div style={styles.btnIconStyle}>
                {/** ICON BTN */}
                <AddBtnWrapper addElement={addElement} type={type}>
                    <PlusButtonIcon/>
                </AddBtnWrapper>
                
            </div>
        )
    }

    return addBtn

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
        marginLeft: '0.5em',

    },
    btnIconStyle: {
        display: 'flex',
        marginLeft: '0.5em',
        alignItems: 'center'
        
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