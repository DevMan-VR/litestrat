import React, {Fragment} from 'react';
import './ButtonWrapper/ButtonWrapper.css'
import AddBtnWrapper from './AddBtn/AddBtnWrapper';

const ElementWrapper = ({onClick, children, style, className}) => {

    var wrapper = (
            <div className={className} style={style} >
                <button  onClick={onClick}>{children}</button>
            </div>
        )

    
    return wrapper
    

    
    


}

export default ElementWrapper