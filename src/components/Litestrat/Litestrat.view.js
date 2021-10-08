import React, {Fragment} from 'react'
import ExternalActor from '../ExternalActor/ExternalActor.js'
import OrganizationView from '../Organization/Organization.view.js'
import { useLitestratContext } from './LitestratContext.js'

const LitestratView = () => {

    const {state} = useLitestratContext()

    //Si no hay escenas no se retorna nada...
    if(state.workspace.scenes.length === 0){
        return <Fragment/>
    }

    

    var scene = state.workspace.scenes[state.workspace.sceneIndex]
    var externalActor = scene.externalActor

    const renderOrganizationView = () => {
        var organization;
        if(externalActor){
            organization = (
                <div className="OrganizationContainer" style={styles.litestratContainer}>
                    {/*SEGUIR TRABAJANDOLO*/}
                    <OrganizationView />

                </div>
            )
        } else {
            organization = <Fragment/>
        }


        return organization;
    }
    
    return(
        

        <div className="LitestratBody" style={styles.litestratBody}>
            <div className="ExternalActorRow" style={styles.flex}>
                <ExternalActor/>
            </div>

            {renderOrganizationView()}
            


        </div>

    )
    
}

const styles = {
    litestratBody: {
        display: 'flex',
        flexDirection: 'column',
        padding: '2em',
        height: '100%',
        marginLeft:'15em'
    },
    flex: {
        display: 'flex'
    },
    litestratContainer: {
        display: 'flex',
        flexDirection: 'column',
        //marginTop: '3em',
        marginLeft: '15em',
        backgroundColor: 'whitesmoke',
        minWidth: '1000px',
        width: '100%',
        height: '700px',
        boxShadow: "-2px 2px 10px #9E9E9E",
        borderRadius: '4em'

    },
}

export default LitestratView