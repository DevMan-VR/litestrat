import React from 'react'
import LitestratView from './Litestrat.view'
import Navbar from '../Navbar/Navbar'
import NavItem from '../Navbar/NavItem'
import DropdownItem from '../Navbar/DropdownItem'
import LitestratProvider from './LitestratContext'
import LitestratCrudProvider from './LitestratCrudContext'

import './Litestrat.css'

const LitestratApp = () => {
    return (

        <LitestratProvider>
            <LitestratCrudProvider>
                <div className="rootBody">


                <Navbar> 
                    <NavItem title="Litestrat Web"/>
                    <NavItem title="Escenas" isDropdown={true}>
                        <DropdownItem />
                        
                    </NavItem>
                </Navbar>



                <LitestratView />
                
                        
            
                        
                </div>
            </LitestratCrudProvider>
        </LitestratProvider>
    )
}


export default LitestratApp