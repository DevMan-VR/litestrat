import React from 'react'
import AddBtnWrapper from './AddBtnWrapper.js'
import btnAdd from '../../../assets/png/btnAdd.png'

const AddBtnSVG_1 = ({externalActors=[],SVG, title, type}) => {

    let options;

    switch(type){
        case 'externalActor':
            options=externalActors
            break;
    }

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
                        <AddBtnWrapper options={options} type={type}>
                            <img src={btnAdd} alt="ADD" />
                        </AddBtnWrapper>
                            
                        
                        
                    </div>
                        
                </div>

            </div>
    )
}

var styles = {
    containerStyle: {
        display: 'flex',
        opacity: 0.5,
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