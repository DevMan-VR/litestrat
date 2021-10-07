import React from 'react' 
import '../Litestrat/Litestrat.css'


const Dropdown = (props) => {
    return (
        <div className="dropdownContainer">
            <div className="dropdown">
                {props.children}         

            </div>
        </div>
    )
}

export default Dropdown;