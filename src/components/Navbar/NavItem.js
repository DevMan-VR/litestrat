import React from 'react'
import IsDropdown from './IsDropdown'
import '../Litestrat/Litestrat.css'
import Dropdown from './Dropdown'
const NavItem = ({title, isDropdown, children}) => {


    if(isDropdown){
        return (
            <div className="NavItem">
                <IsDropdown >
                <div className="navContent">

                    <div className="nav-icon"> 
                        <svg width="50" height="50" focusable="false" data-prefix="far" data-icon="address-book" class="svg-inline--fa fa-address-book fa-w-14 .fa-primary" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="white" d="M436 160c6.6 0 12-5.4 12-12v-40c0-6.6-5.4-12-12-12h-20V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h320c26.5 0 48-21.5 48-48v-48h20c6.6 0 12-5.4 12-12v-40c0-6.6-5.4-12-12-12h-20v-64h20c6.6 0 12-5.4 12-12v-40c0-6.6-5.4-12-12-12h-20v-64h20zm-68 304H48V48h320v416zM208 256c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm-89.6 128h179.2c12.4 0 22.4-8.6 22.4-19.2v-19.2c0-31.8-30.1-57.6-67.2-57.6-10.8 0-18.7 8-44.8 8-26.9 0-33.4-8-44.8-8-37.1 0-67.2 25.8-67.2 57.6v19.2c0 10.6 10 19.2 22.4 19.2z"></path></svg>

                    </div>
                    <span class="link-text">{title}</span>
                </div>
                <Dropdown>
                    {children}
                </Dropdown>
                </IsDropdown>
            </div>
        )
    } else {
        return (
            <div className="NavItem">
                    <div className="nav-icon"> 
                    <svg xmlns="http://www.w3.org/2000/svg" width="33.202" height="51.296" viewBox="0 0 33.202 51.296">
                        <g id="Grupo_14" data-name="Grupo 14" transform="translate(0.517 0.5)">
                        <g id="Grupo_5" data-name="Grupo 5" transform="translate(0)">
                            <path id="Trazado_2" data-name="Trazado 2" d="M4235.742,22.065h8.3l5.554,5.09-2.8,30.36,16.4,6.75V72.23h-27.454l-4.73-6.907,2.6-23.754Z" transform="translate(-4231.012 -22.065)" fill="#98a2a4" stroke="#fff" stroke-width="1"/>
                            <path id="Trazado_3" data-name="Trazado 3" d="M4235.853,21.717c-6.285-6.091-6.091-5.7-6.091-5.7h8.218l4.806,4.772Z" transform="translate(-4225 -15.66)" fill="none" stroke="#fff" stroke-width="1"/>
                            <path id="Trazado_4" data-name="Trazado 4" d="M4229.761,64.555l5.608-44.2c-.1,0,8.218-.58,8.218-.58l-3.095,30.36" transform="translate(-4224.999 -14.39)" fill="#293148" stroke="#fff" stroke-width="1"/>
                            <line id="Línea_9" data-name="Línea 9" x1="12.038" y2="16.051" transform="translate(4.413 34.445)" fill="none" stroke="#fff" stroke-width="1"/>
                        </g>
                        </g>
                    </svg>
                    </div>
                    <span class="link-text-logo">{title}</span>
            </div>
        )

    }

    
    

}

export default NavItem;