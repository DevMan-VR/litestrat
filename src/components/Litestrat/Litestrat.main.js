import React from 'react'
import LitestratView from './Litestrat.view'
import NavbarComponent from '../Navbar/NavbarComponent'
import LitestratProvider from './LitestratContext'
import LitestratCrudProvider from './LitestratCrudContext'

import './Litestrat.css'

const LitestratApp = () => {
    return (

        <LitestratProvider>
            <LitestratCrudProvider>
                <div className="rootBody">
                    <NavbarComponent/>
                    <LitestratView />   
                </div>
            </LitestratCrudProvider>
        </LitestratProvider>
    )
}


export default LitestratApp