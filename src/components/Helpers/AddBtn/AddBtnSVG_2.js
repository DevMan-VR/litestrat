import React from 'react'
import btnAdd from '../../../assets/png/btnAdd.png'
import AddBtnWrapper from './AddBtnWrapper.js'

const AddBtnSVG_2 = ({ tactics=[], roles=[], teams=[], isFirst, SVG, title, type}) => {

    var addBtn

    var options
    if(roles.length > 0){
        //Quiere decir que viene con roles y se pasa este argumento options
        options = roles
    } else if (teams.length > 0){
        //Quiere decir que viene con teams y se pasa como argumento options
        options = teams
    } else if (tactics.length > 0){
        options = tactics
    } else {
        options = []
    }



    if(isFirst){
       addBtn = ( 
           
            <div style={styles.containerStyle}>

                <div style={styles.icon}>
               
                    <SVG />
                </div>
                <div style={styles.elementStyle}>
                    <div className="content-addd" style={styles.content}>
                       
                        <div>{title}</div>
                        
                    </div>
                    <div style={styles.btnIconStyle}>
                       
                        <AddBtnWrapper options={options} type={type}>
                            <img src={btnAdd} alt="ADD" />
                        </AddBtnWrapper>
                        
                    </div>
                        
                </div>

            </div>
       )

    } else {
        var height;
        if(type === 'objective'){
            height = 'initial';
        } else {
            height = styles.btnIconStyle.height;
        }
        addBtn = (
            <div style={{
                    ...styles.btnIconStyle,
                    height: height
                }}>

              <AddBtnWrapper  options={options} type={type}>
                <img style={{marginTop: '2em'}} src={btnAdd} alt="ADD" />
              </AddBtnWrapper>
                
            </div>
        )
    }

    return addBtn

}

const styles = {
    containerStyle: {
        display: 'flex',
        opacity: 0.5,
        //backgroundColor: '#dcdcdc'
    },
    icon: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: '0.5em'
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
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
        
        
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