import React, {Fragment} from 'react';
import './ButtonWrapper/ButtonWrapper.css'
import AddBtnWrapper from './AddBtn/AddBtnWrapper';

const ElementWrapper = ({onClick, children, style}) => {

    var wrapper = (
            <div className="ElementWrapper" style={style} >
                <button  onClick={onClick}>{children}</button>
            </div>
        )

    
    return wrapper
    

    
    


}

export default ElementWrapper