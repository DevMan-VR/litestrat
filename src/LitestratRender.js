import React from 'react'

import ExternalActorView from './components/ExternalActor/ExternalActor.view.svg.js';
import AddBtnSVG_1 from './components/Helpers/AddBtn/AddBtnSVG_1.js'; //For text at bottom
import AddBtnSVG_2 from './components/Helpers/AddBtn/AddBtnSVG_2.js'; //For text aside


//Icons
import GoalIcon from './assets/icons/GoalIcon.js';
import StrategyIcon from './assets/icons/StrategyIcon.js';
import TacticIcon from './assets/icons/TacticIcon.js';
import ObjectiveIcon from './assets/icons/ObjectiveIcon.js';
import ExternalActorIcon from './assets/icons/ExternalActorIcon.js';
import InfluencingArrowIcon from './assets/icons/InfluencingArrowIcon.js';
import OrganizationIcon from './assets/icons/OrganizationIcon.js';


//Functions & Pure Logic
import { absoluteMousePosition } from './LitestratCore.js';

export const renderAll = (state) => {

    

    var style = {
        ...styles.flexColumn,
        height: '100vh',
        width: '100vw',
        backgroundColor: 'orange'
    }

    return (
        <div className="body" style={style} onClick={absoluteMousePosition}>


            <div className="NavBarRow">

                    {/**   Aqui va el Navbar Component    */}
                    <p>Navbar ROW</p>
            </div>


            {renderLitestrat(state)}

        </div>

     )

}

export const renderLitestrat = (state) => {

    let externalActor = state.workspace.scenes[state.workspace.sceneIndex].externalActor

    var style = {
        ...styles.flexColumn,
        ...styles.padding
    }
    
    return(
        

        <div className="LitestratBody" style={style}>

            
                {renderExternalActor(externalActor)}
            

        </div>

    )
    
}

export const renderExternalActor = (externalActor) => {
    var extActor;

    console.log("what is externalActor? ",externalActor)
    if(externalActor){

        extActor = (
            <div className="ExternalActorRow" style={styles.flexRow}>
                <div className="ExternalActorContainer" style={styles.flex}>
                    <ExternalActorView  externalActor={externalActor} onClick={() => console.log("do nothing... (log)")}/>
                    
                </div>

                {/**INFLUENCING ARROW */}
                <div style={{marginLeft: '0.3em'}}>
                    <InfluencingArrowIcon />
                </div>
            </div>
            
        )
    } else {
        extActor = (
            <div className="InfluencerRow" style={styles.influencerRow}>
                <div className="InfluencerContainer" style={styles.influencerContainer}>
                    <AddBtnSVG_1 SVG={ExternalActorIcon} title="External Actor Name" description="Description" addElement={() => console.log("SHOULD ADD ELEMENTs")} type="externalActor" />

                </div>
            </div>
        )
    }

    return extActor
}


const styles = {
    flex: {
        display: 'flex'
    },

    flexRow: {
        display: 'flex',
        flexDirection: 'row'
    },

    flexColumn: {
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: 'orange'
    },

    centered: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },

    horizontalCentered: {
        display: 'flex',
        justifyContent: 'center',
    },

    verticalCentered: {
        display: 'flex',
        alignItems: 'center'
    },

    padding: {
        padding: '2em'
    }
}