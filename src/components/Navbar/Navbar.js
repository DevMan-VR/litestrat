import React, {Children, Fragment} from 'react'
import '../Litestrat/Litestrat.css'

const Navbar = (props) => {
    return(
        <div className="NavBarRel" >
            <div className="NavBarAbsContainer" >
                {props.children}
            </div>
        </div>
    )
}

export default Navbar