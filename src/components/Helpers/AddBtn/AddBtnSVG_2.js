import React from 'react'
import btnAdd from '../../../assets/png/btnAdd.png'
import AddBtnWrapper from './AddBtnWrapper.js'

const AddBtnSVG_2 = ({ roles=[], teams=[], externalInfluences=[], isFirst, SVG, title, type, customStyle}) => {

    var addBtn
    let marginTop = "2em"
    var options
    if(roles.length > 0){
        //Quiere decir que viene con roles y se pasa este argumento options
        options = roles
    } else if (teams.length > 0 && type !== 'externalInfluence'){
        //Quiere decir que viene con teams y se pasa como argumento options
        options = teams
    } else {
        options = []
    }

    if(type=='externalInfluence'){
        options = externalInfluences
    }


    if(type==="relatedUnit"){
        marginTop = "4em"
    }


    let specialStyle = {
        btnIconStyle: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: type === 'externalInfluence' ? '4em' : '100%',
            marginRight: type === 'externalInfluence' ? '5.1em' : '0px'
            
            
        },
        containerStyle: {
            display: 'flex',
            opacity: 0.5,
            marginLeft: type === 'externalInfluence' && isFirst ? '3em' : '0px'
            //backgroundColor: '#dcdcdc'
        },
    }


    if(isFirst){
       addBtn = ( 
           
            <div style={{...specialStyle.containerStyle, ...customStyle}}>

                <div style={styles.icon}>
               
                    <SVG />
                </div>
                <div style={styles.elementStyle}>
                    <div className="content-addd" style={styles.content}>
                       
                        <div>{title}</div>
                        
                    </div>
                    <div style={specialStyle.btnIconStyle}>
                       
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
            height = specialStyle.btnIconStyle.height;
        }
        addBtn = (
            <div style={{
                    ...specialStyle.btnIconStyle,
                    height: height
                }}>

              <AddBtnWrapper  options={options} type={type}>
                <img style={{marginTop: marginTop}} src={btnAdd} alt="ADD" />
              </AddBtnWrapper>
                
            </div>
        )
    }

    return addBtn

}

const styles = {
    
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
        width:'7em'

    },
    
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