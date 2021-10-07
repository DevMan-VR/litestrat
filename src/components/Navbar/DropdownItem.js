import React from 'react'
import '../Litestrat/Litestrat.css'


const DropdownItem = ({scene}) => {
    return (
        <div className="subItem"> 
            <span className="sceneName"> Escena 1 </span>
            <div className="subItemActionsContainer">
                <div className="subItemAction"> SELT </div>
                <div className="subItemAction"> EDIT </div>
                <div className="subItemAction"> DELT </div>
            </div>
        </div>
    )
}

export default DropdownItem