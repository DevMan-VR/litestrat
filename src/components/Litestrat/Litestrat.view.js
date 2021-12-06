import React, {Fragment} from 'react'
import ExternalActor from '../ExternalActor/ExternalActor.js'
import OrganizationIcon from '../../assets/icons/OrganizationIcon';


import { Gray1 } from '../../constants/Colors';

import { useLitestratContext } from './LitestratContext.js'
import { useLitestratCrudContext } from './LitestratCrudContext.js';

//Goal elements
import GoalIcon from '../../assets/icons/GoalIcon.js';
import AddBtnSVG_2 from '../Helpers/AddBtn/AddBtnSVG_2.js';
import GoalView from '../Goal/Goal.view.js';

//Strategy elements
import StrategyIcon from '../../assets/icons/StrategyIcon.js';
import StrategyView from '../Strategy/Strategy.view.js';

//Tactic elements
import TacticIcon from '../../assets/icons/TacticIcon.js';
import TacticView from '../Tactic/Tactic.view.js';

//Objective elements
import ObjectiveIcon from '../../assets/icons/ObjectiveIcon.js';
import ObjectiveView from '../Objective/Objective.view.js';

//RelatedU elements
import RelatedUnitComponent from '../RelatedUnit/RelatedUnit.js';
import RelatedUnitIcon from '../../assets/icons/RelatedUnitIcon.js';

//Exernal Influence Elements
import InfluencingActorComponent from '../InfluencingActor/InfluencingActor.js';
import InfluencingActorIcon from '../../assets/icons/InfluencingActorIcon.js';


const LitestratView = () => {

    const {state} = useLitestratContext()

    const {addElement, editElement, selectElement} = useLitestratCrudContext()

    //Si no hay escenas no se retorna nada...
    if(state.workspace.scenes.length === 0){
        return <Fragment/>
    }

    var scene = state.workspace.scenes[state.workspace.sceneIndex]
    var externalActor = scene.externalActor

    console.log("Scene selected", scene)




    const getBodySize = (minWidth) => {

        let goalSelected = scene.goalSelected
        let stratSelected = scene.strategySelected
        let tactSelected = scene.tacticSelected
      

        let goalNumber = scene.organization && scene.organization.goals ? scene.organization.goals.length : 0
        let stratNumber = goalSelected && goalSelected.strategies ? goalSelected.strategies.length : 0
        let tactNumber = stratSelected && stratSelected.tactics ? stratSelected.tactics.length : 0
        let objNumber = tactSelected && tactSelected.objectives ? tactSelected.objectives.length : 0
        let ruNumber = tactSelected && tactSelected.relatedUnits ? tactSelected.relatedUnits.length : 0

        let sumGoals = goalNumber * 300
        let sumStrat = stratNumber * 300
        let sumTact = tactNumber * 420
        let sumObj = objNumber * 450;
        let sumRU = ruNumber * 230

        let sizes = [sumGoals, sumStrat, sumTact, sumObj, sumRU]

        let finalSize =  Math.max.apply(null, sizes);

        if(finalSize > minWidth){
            return finalSize+"px"
        } else {
            return minWidth+"px"
        }
        
    }

    let bodySize = getBodySize(1000)

    console.log("Body size is :::: ", bodySize)

    let specialStyle ={
        organizationBody: {
            position: 'relative', 
            display: 'flex', 
            alignItems: 'baseline', 
            height: '500px',
            width: bodySize
        }
    }


    const renderOrganizationView = () => {
        var organization;
        if(externalActor){
            organization = 
            (
                <div className="OrganizationContainer" style={styles.litestratContainer}>

                    <div className="OrganizationHeader" style={styles.organizationHeader}>
                        {/** ORGANIZATION SVG  */}
                        <div style={{display:'flex',justifyContent:'center', alignItems: 'center', marginLeft: '5em'}}>
                            <OrganizationIcon />
                        </div>
                        
                        <div>
                            <p>{externalActor.influencedOrganization}</p>
                        </div>
                        
                    </div>

                    <div className="OrganizationBody" style={specialStyle.organizationBody}>

                        <div className="GoalRow" className="GoalRow" style={styles.goalRow}>
                            <div className="GoalArea" style={styles.goalArea}>
                                
                                {scene.organization.goals.map((goal, index) => {
                            
                                        return(
                                            
                                            <GoalView 
                                                id="goalElement" 
                                                id={goal.id} 
                                                key={goal.id}
                                                goal={goal} 
                                                onClick={() => selectElement(index, goal, 'goal')}
                                                relTop="7px"
                                                relLeft="57px"
                                                index={index}
                                            />
                    
                                            
                            
                                        )
                            
                                })}
                    
                                <AddBtnSVG_2 isFirst={scene.organization.goals.length === 0} SVG={GoalIcon} title="Nombre de Meta" description="Description" addElement={addElement} type="goal" />
                    
                            </div>
                        </div>

                        {
                            scene.goalSelected ?
                                (
                                     
                                    <div className="StrategyRow" style={styles.strategyRow}>
                                            <div className="StrategyArea" style={styles.strategyArea}>
    
                                                {scene.goalSelected.strategies.map((strategy, index) => {
                                                    return (
                                                        <StrategyView 
                                                            id={strategy.id} 
                                                            key={strategy.id} 
                                                            strategy={strategy} 
                                                            onClick={() => selectElement(index, strategy, 'strategy')} 
                                                            relTop="7px"
                                                            relLeft="57px"
                                                            index={index}
                                                        />
                                                    )
                                                })}

                                                <AddBtnSVG_2 isFirst={scene.goalSelected.strategies.length === 0} SVG={StrategyIcon} title="Nombre de Estrategia" description="Description" addElement={addElement} type="strategy" />
                                            </div>

                                    </div>
                                )
                                :
                                (
                                    <Fragment/>
                                )
                        }
                        


                        {
                            scene.strategySelected ? 
                            (
                                <div className="TacticRow" className="TacticRow" style={styles.tacticRow}>
                                    <div className="TacticArea" style={styles.tacticArea}>
                                        {scene.strategySelected.tactics.map((tactic, index) => (
                                            <TacticView 
                                                options={state.workspace.teams} 
                                                id={tactic.id} 
                                                key={tactic.id} 
                                                tactic={tactic} 
                                                onClick={() => selectElement(index, tactic, 'tactic')} 
                                                relTop="7px"
                                                relLeft="57px"
                                                index={index}
                                                
                                            />
                                        ))}
                                    
                                        <AddBtnSVG_2 teams={state.workspace.teams} isFirst={scene.strategySelected.tactics.length === 0} SVG={TacticIcon} title="Nombre de Táctica" description="Description" addElement={addElement} type="tactic" />
                                    
                                    </div>
                                </div>

                            )
                            :
                            (
                                <Fragment/>
                            )
                        }
                       

                        { scene.tacticSelected ?
                            (
                                <div className="ObjectiveRow" className="ObjectiveRow" style={styles.objectiveRow} >
                                    
                                    
                                    
                                    
                                    <div className="ObjectiveArea" style={styles.objectiveArea}>

                                        {scene.tacticSelected.objectives.map((objective, index) => {

                                            return (
                                                    <ObjectiveView 
                                                        options={scene.tacticSelected.team.roles} 
                                                        id={objective.id} 
                                                        key={objective.id} 
                                                        objective={objective} 
                                                        onClick={() => selectElement(index, objective, 'objective')} 
                                                        relTop="7px"
                                                        relLeft="40px"
                                                        index={index}
                                                    />
                                            )
                                        })}

                                        <AddBtnSVG_2 roles={scene.tacticSelected.team.roles} isFirst={scene.tacticSelected.objectives.length === 0} SVG={ObjectiveIcon} title="Nombre de Objetivo" description="Description" addElement={addElement} type="objective" />

                                

                                    </div>
                                </div>
                        
                            )
                            :
                            (
                                <Fragment/>
                            )
                        }
                        
                        
                        
                    </div>
                    {
                        scene.tacticSelected ?
                        (
                            <div className="relatedUnitsContainer" style={styles.relatedUnitContainer}>
                            

                                    <RelatedUnitComponent relatedUnits={scene.tacticSelected.relatedUnits} team={scene.tacticSelected.team}  />

                                    <AddBtnSVG_2 teams={state.workspace.teams} isFirst={scene.tacticSelected.relatedUnits.length === 0} SVG={RelatedUnitIcon} title="Unidad Organizacional Relacionada" description="Description" addElement={addElement} type="relatedUnit" customStyle={{display:'flex', alignItems:'flex-start'}} />
                            
                                
                            </div>

                            
                        )
                        :
                        (
                            <Fragment/>
                        )
                    }
                    

                </div>
            )
        } else {
            organization = <Fragment/>
        }


        return organization;
    }
    
    return(
        
        <div className="LitestratWrapper" style={{display:'flex'}}>
            <div className="LitestratBody" style={styles.litestratBody}>
                <div className="ExternalActorRow" style={styles.flex}>
                    <ExternalActor/>
                </div>

                {renderOrganizationView()}

            </div>
            {
                scene.tacticSelected? 
                (
                    <div style={{display: 'flex', flexDirection: 'column', alignItems:'center',height:'620px', width:'300px', marginTop: '16em'}}>
                        <InfluencingActorComponent externalInfluences={scene.tacticSelected.externalInfluences} team={scene.tacticSelected.team} />

                        <AddBtnSVG_2 teams={state.workspace.teams} externalInfluences={state.workspace.externalInfluences}  isFirst={scene.tacticSelected.externalInfluences.length === 0} SVG={InfluencingActorIcon} title="Actor Influyente Externo" description="Description" addElement={addElement} type="externalInfluence" />

                    </div>
                )
                :
                (
                    <Fragment/>
                )
            }

            
        </div>

    )



    
    
}



const styles = {
    litestratBody: {
        display: 'flex',
        flexDirection: 'column',
        paddingLeft: '2em',
        paddingTop: '2em',
        height: '100%',
        marginLeft:'15em'
    },
    flex: {
        display: 'flex',
        height:'7em'
    },
    litestratContainer: {
        display: 'flex',
        flexDirection: 'column',
        //marginTop: '3em',
        backgroundColor: 'white',
        minWidth: '1000px',
        //height: '970px',
        boxShadow: "-2px 2px 10px #9E9E9E",
        borderRadius: '4em',
        marginTop: '1em',
        //width: '65vw',

    },
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

    goalArea: {
        display:'flex',
        alignItems:'flex-end', 
        width: '85%', 
        height: '100px', 
        marginTop: '1em', 
        marginLeft: '2%'
    },

    strategyRow: {
        position: 'absolute',
        bottom: '0px',
        right: '0px',
        height: '75%',
        width: '98%',
        borderTopLeftRadius: '4em',
        borderBottomLeftRadius: '4em',
        borderBottomRightRadius: '4em',
        backgroundColor: '#F2F2F2',
        zIndex: 2
    },
    strategyArea: {
        display:'flex',
        alignItems:'flex-end', 
        width: '85%', 
        height: '100px', 
        marginTop: '1em', 
        marginLeft: '2%'
    },
    tacticRow: {
        position: 'absolute',
        bottom: '0px',
        right: '0px',
        borderTopLeftRadius: '4em',
        borderBottomLeftRadius: '4em',
        borderBottomRightRadius: '4em',
        backgroundColor: '#DCDCDC',
        height: '50%',
        width: '96%',
        zIndex: 3
    },
    tacticArea: {
        display:'flex',
        alignItems:'flex-end',
        width: '90%', 
        height: '100px', 
        marginTop: '1em', 
        marginLeft: '2%'
    },
    objectiveRow: {
        position: 'absolute',
        bottom: '0px',
        right: '0px',
        borderTopLeftRadius: '4em',
        borderBottomLeftRadius: '4em',
        borderBottomRightRadius: '4em',
        backgroundColor: '#D0D0D0',
        height: '25%',
        width: '94%',
        zIndex: 4
    },
    objectiveArea: {
        display:'flex',
        alignItems:'flex-start', 
        width: '100%', 
        height: '100%', 
        marginTop: '1em', 
        marginLeft: '2%'
    },
    organizationInfoCard: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: '2em',
        marginBottom: '1em',
        position: 'absolute',
        top: '-210px',
        left: '-120px',
        backgroundColor: '#F2F2F3',
        height: '160px',
        width: '220px',
        borderTopRightRadius: '5em',
        borderBottomRightRadius: '5em',
        borderTopLeftRadius: '2em',
        borderBottomLeftRadius: '2em',
        boxShadow: '-2px 4px 4px #B2B2B2',

    },
    relatedUnitContainer: {
        display:'flex',
        alignItems:'center',
        justifyContent:'flex-start',
        width:'100%',
        height:'120px',
        marginLeft: '8%',
        padding: '0.3em'
    }
}



export default LitestratView