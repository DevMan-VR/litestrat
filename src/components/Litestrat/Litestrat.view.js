import React from 'react'
import ExternalActor from '../ExternalActor/ExternalActor.js'

const LitestratView = () => {
    
    return(
        

        <div className="LitestratBody" style={styles.litestratBody}>
            <div className="ExternalActorRow" style={styles.flex}>
                <ExternalActor/>
            </div>

                {/*SEGUIR TRABAJANDOLO*/}
                {/*renderOrganization()*/}
            

        </div>

    )
    
}

const styles = {
    litestratBody: {
        display: 'flex',
        flexDirection: 'column',
        padding: '2em'
    },
    flex: {
        display: 'flex'
    },
}

export default LitestratView