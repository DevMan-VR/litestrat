import React from 'react'
import LitestratView from './Litestrat.view'
import Navbar from '../Navbar/Navbar'
import LitestratProvider from './LitestratContext'
import LitestratCrudProvider from './LitestratCrudContext'

const LitestratApp = () => {
    return (

        <LitestratProvider>
            <LitestratCrudProvider>
                <div className="body" style={styles.body}>
                        <div className="NavBarRow" style={styles.navbarContainer}>
                                <Navbar/> 
                        </div>
            
                        <LitestratView />
                </div>
            </LitestratCrudProvider>
        </LitestratProvider>
    )
}


const styles = {

    body: {
        display: 'flex',
        flexDirection: 'column',
        height: '100vh',
        width: '100vw',
        margin: '0px',
        padding: '0px'
    },

    navbarContainer: {
        backgroundColor: 'whitesmoke', 
        height: '4em', 
        width: '100%', 
        marginBottom: '1em'
    }
  
}

export default LitestratApp