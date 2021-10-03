import React, {Fragment} from 'react'
import { useLitestratContext } from '../Litestrat/LitestratContext';

import OrganizationIcon from '../../assets/icons/OrganizationIcon';
import GoalsComponent from '../Goal/GoalsComponent';
import StrategyComponent from '../Strategy/Strategy';
import TacticComponent from '../Tactic/Tactic';
import ObjectiveComponent from '../Objective/Objective';
import InfluencingActorComponent from '../InfluencingActor/InfluencingActor';
import ExternalActorIcon from '../../assets/icons/ExternalActorIcon';

import { Gray1 } from '../../constants/Colors';
import AddBtnSVG_2 from '../Helpers/AddBtn/AddBtnSVG_2';
import { useLitestratCrudContext } from '../Litestrat/LitestratCrudContext';

const OrganizationView = () => {

    const {state} = useLitestratContext()
    const {addElement} = useLitestratCrudContext()

    var scene = state.workspace.scenes[state.workspace.sceneIndex]
    var externalActor = scene.externalActor

    

    return(
        <Fragment>

            <div className="OrganizationHeader" style={styles.organizationHeader}>
                {/** ORGANIZATION SVG  */}
                <div style={{display:'flex',justifyContent:'center', alignItems: 'center', marginLeft: '5em'}}>
                    <OrganizationIcon />
                </div>
                
                <div>
                    <p>{externalActor.influencedOrganization}</p>
                </div>
                
            </div>

            <div className="OrganizationBody" style={{position: 'relative', display: 'flex', alignItems: 'baseline', height: '100%', width: '100%'}}>
            
                <div className="GoalRow" style={styles.goalRow}>
                    <GoalsComponent/>
                </div>
                
                <div className="StrategyRow" style={styles.strategyRow}> 
                    <StrategyComponent/>
                </div>

                <div className="TacticRow" style={styles.tacticRow}>
                    <TacticComponent/>
                </div>
                
                <div className="ObjectiveRow" style={styles.objectiveRow} >
                    <ObjectiveComponent/>
                </div>

            </div>


            <div style={{position: 'relative'}}>
                <div className="ExternalInfluencedActorsContinaer" 
                    style={{
                        position: 'absolute',
                        top: '-600px',
                        left: '1010px',
                        width: '300px',
                        height: '550px',
                        
                    }}
                >

                    <InfluencingActorComponent />

                    <AddBtnSVG_2 tactics={state.workspace.scenes[state.workspace.sceneIndex].allTactics}  isFirst={scene.externalInfluences.length === 0} SVG={ExternalActorIcon} title="Actor Influyente Externo" description="Description" addElement={addElement} type="externalInfluence" />
                

                </div>

            </div>
        </Fragment>
    )
}


const styles = {
    organizationCard: {
        position: 'absolute',
        bottom: '0px',
        right: '0px',
        borderTopLeftRadius: '4em',
        borderBottomLeftRadius: '4em',
        borderBottomRightRadius: '4em',
    },

    organizationHeader: {
        display: 'flex',
        backgroundColor: '#1E4E79',
        fontSize: '2em',
        borderTopLeftRadius:'2em',
        borderTopRightRadius: '2em',
        color: 'whitesmoke',
        fontWeight: '700'
        

    },

    goalRow: {
        position: 'absolute',
        bottom: '0px',
        right: '0px',
        borderTopLeftRadius: '4em',
        borderBottomLeftRadius: '4em',
        borderBottomRightRadius: '4em',
        backgroundColor: '#FFFFFF',
        height: '100%',
        width: '100%',
        zIndex: '1'

    },
    strategyRow: {
        display: 'flex',
        flexDirection: 'row',
        marginLeft: '5em',
        marginTop: '2em',
        backgroundColor: Gray1
    },

}

export default OrganizationView