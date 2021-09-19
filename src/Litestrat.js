import './Litestrat.css'
import React, {useState, useEffect, Fragment, useRef} from 'react'

//Views
import ExternalActorView from './components/ExternalActor/ExternalActor.view.svg.js';
import GoalView from "./components/Goal/Goal.view.js";
import StrategyView from './components/Strategy/Strategy.view.js';
import TacticView from './components/Tactic/Tactic.view.js';

import AddBtnSVG_1 from './components/Helpers/AddBtn/AddBtnSVG_1.js'; //For text at bottom
import AddBtnSVG_2 from './components/Helpers/AddBtn/AddBtnSVG_2.js'; //For text aside

//Models
import Organization from './components/Organization/Organization.model.js'
import Goal from './components/Goal/Goal.model.js';
import Strategy from './components/Strategy/Strategy.model.js';
import Tactic from './components/Tactic/Tactic.model.js';
import Objective from './components/Objective/Objective.model.js';
import ExternalActor from './components/ExternalActor/ExternalActor.model.js';

//SVGs
import GoalIcon from './assets/icons/GoalIcon.js';
import StrategyIcon from './assets/icons/StrategyIcon.js';
import TacticIcon from './assets/icons/TacticIcon.js';
import ObjectiveIcon from './assets/icons/ObjectiveIcon.js';
import ExternalActorIcon from './assets/icons/ExternalActorIcon.js';
import InfluencingArrowIcon from './assets/icons/InfluencingArrowIcon.js';
import OrganizationIcon from './assets/icons/OrganizationIcon.js';

//Constants
import {Gray1, Gray2, Gray3} from './constants/Colors.js'

//Dummy Data
import { teamsDummy } from './data/dummy.js';

import { absoluteMousePosition } from './LitestratCore.js';

const Litestrat = () => {

    const [state, setState] = useState({

        //El workspace se deberia cargar según via GET del server según sea el caso, si no crear uno nuevo
        workspace: {
            scenes: [
                {
                    //Por defecto se inicializará el workspace con una escena (la que se muestra)
                    organization: null, //new Organization()
                    selectedExternalActor: null,
                    selectedGoal: null,
                    selectedStrategy: null,
                    selectedTactic: null,
                    selectedObjective: null,
                    selectedInfluenced: null
                }
            ],

            //Los teams son las unidades organizacionales, estos se pueden utilizar a lo largo de toda las escenas (dentro del workspace)
            teams: teamsDummy,
            sceneIndex: 0
        },
        
    })


    useEffect(() => {
        console.log("Cambio de estado: ", state)
    }, [state])




    //Add Element FX
    const addElement = (type, data) => {

        //Getting a clone object of current scene
        var scene = state.workspace.scenes[state.workspace.sceneIndex]
        var updatedScene = {...scene}
    
        switch(type) {
            case 'externalActor':
    
                var index = Math.floor(Math.random()*10)
                var idExternalActor = "EX_ACT"+index
                var {label} = data.influencedOrganization
                var externalActor = new ExternalActor(idExternalActor,null,null,data.title,data.influenceDescription,label)
                console.log("EL CREADO ES :", externalActor)

                

                //Adding External Actor & Organization
                updatedScene.externalActor = externalActor
                updatedScene.organization = new Organization()
                
                var scenes = [...state.workspace.scenes]
                scenes[state.workspace.sceneIndex] = updatedScene


                setState(prevState => {
                    return{
                        ...prevState,
                        workspace: {
                            ...prevState.workspace,
                            scenes: [...scenes]
                        }
                        
                    }
                })
                break;
    
    
            case 'goal':
    
                var index = Math.floor(Math.random()*10)
                var idGoal = "g"+index
    
                var goal = new Goal(idGoal,null,null,null,data.title,data.description,data.until,false)

                //Adding a new Goal
                updatedScene.organization.goals.push(goal)
                
                var scenes = [...state.workspace.scenes]
                scenes[state.workspace.sceneIndex] = updatedScene
    
                setState(prevState => {
                    return{
                        ...prevState,
                        workspace: {
                            ...prevState.workspace,
                            scenes: [...scenes]
                        }
                    }
                })
                break;
            
            case 'strategy':
    
                var idGoal = state.workspace.scenes[state.workspace.sceneIndex].goalSelected.id
                var index = Math.floor(Math.random()*10)
                var idStrategy =  idGoal+"s"+index
    
                var goalSelected = state.workspace.scenes[state.workspace.sceneIndex].goalSelected
                var strategy = new Strategy(idStrategy,null,null,null,data.title,data.description,data.until,false)

                var newState = {...state}
                newState.workspace.scenes[newState.workspace.sceneIndex].organization.goals[goalSelected.index].strategies.push(strategy)

                console.log("NEW STRATEGY")
                console.log(newState)
                setState(newState)
                break;
    
            case 'tactic':
                var scene = state.workspace.scenes[state.workspace.sceneIndex]

                var idStrategy =  scene.strategySelected.id
                var index = Math.floor(Math.random()*10)
                var idTactic =  idStrategy+"t"+index
    
                var goalSelected = scene.goalSelected
                var strategySelected = scene.strategySelected
    
                var tactic = new Tactic(idTactic,null,null,null,data.title,data.description,data.until,false)
    
                tactic.team = data.team;
                //tactic.team = {...teamsDummy[0]} //por mientras es fijo... (pre-creado)
    
                var newState = {...state}
                newState.workspace.scenes[state.workspace.sceneIndex].organization.goals[goalSelected.index].strategies[strategySelected.index].tactics.push(tactic)
                
                console.log("NEW TACTIC")
                console.log(newState)
                setState(newState)
                break;
    /*
            case 'objective':
    
                var idTactic =  state.organization.tacticSelected.id
                var index = Math.floor(Math.random()*10)
    
                var idObjective = idTactic+"g"+index
    
                var goalSelected = state.organization.goalSelected
                var strategySelected = state.organization.strategySelected
                var tacticSelected = state.organization.tacticSelected
    
                var objective = new Objective(idObjective,null,null,null,title,description,until,false)
    
                var newState = {...state}
                newState.organization.goals[goalSelected.index].strategies[strategySelected.index].tactics[tacticSelected.index].objectives.push(objective)
                console.log("NEW OBJECTIVE")
                console.log(newState)
                setState(newState)
                break;
                
        */

        }
    }


    //Select Element FX
    const selectNode = (index, element, type) => {


        switch(type) {
            case 'goal':

            //reset prev goal selected (if there is one)
            if(state.workspace.scenes[state.workspace.sceneIndex].goalSelected){
                state.workspace.scenes[state.workspace.sceneIndex].goalSelected.isSelected = false
                state.workspace.scenes[state.workspace.sceneIndex].goalSelected = null
                //reset prev strategy selected (if there is one)
                if(state.workspace.scenes[state.workspace.sceneIndex].strategySelected){
                    state.workspace.scenes[state.workspace.sceneIndex].strategySelected.isSelected = false
                    state.workspace.scenes[state.workspace.sceneIndex].strategySelected = null
                    //reset prev tactic selected (if there is one)
                    if(state.workspace.scenes[state.workspace.sceneIndex].tacticSelected){
                        state.workspace.scenes[state.workspace.sceneIndex].tacticSelected.isSelected = false
                        state.workspace.scenes[state.workspace.sceneIndex].tacticSelected = null
                    }
                }
            }
            
            var scene = {...state.workspace.scenes[state.workspace.sceneIndex]}


            var goal = element
            goal.index = index
            goal.isSelected = true

            scene.goalSelected = goal

            var updatedScenes = [...state.workspace.scenes]

            updatedScenes[state.workspace.sceneIndex] = scene
           
        
            setState(prevState => {
                return{
                    ...prevState,
                    workspace: {
                        ...prevState.workspace,
                        scenes: updatedScenes

                    }

                }
                
            })
            break;

            
            case 'strategy':

            //reset prev strategy selected (if there is one)
            if(state.workspace.scenes[state.workspace.sceneIndex].strategySelected){
                state.workspace.scenes[state.workspace.sceneIndex].strategySelected.isSelected = false
                state.workspace.scenes[state.workspace.sceneIndex].strategySelected = null

                //reset prev tactic selected (if there is one)
                if(state.workspace.scenes[state.workspace.sceneIndex].tacticSelected){
                    state.workspace.scenes[state.workspace.sceneIndex].tacticSelected.isSelected = false
                    state.workspace.scenes[state.workspace.sceneIndex].tacticSelected = null
                }
            }
            
            var scene = {...state.workspace.scenes[state.workspace.sceneIndex]}


            var strategy = element
            strategy.index = index
            strategy.isSelected = true

            scene.strategySelected = strategy

            var updatedScenes = [...state.workspace.scenes]

            updatedScenes[state.workspace.sceneIndex] = scene


            setState(prevState => {
                return{
                    ...prevState,
                    workspace: {
                        ...prevState.workspace,
                        scenes: updatedScenes

                    }

                }
                
            })
            break;

       
            case 'tactic':

            //reset prev tactic selected (if there is one)
            if(state.workspace.scenes[state.workspace.sceneIndex].tacticSelected){
                state.workspace.scenes[state.workspace.sceneIndex].tacticSelected.isSelected = false
                state.workspace.scenes[state.workspace.sceneIndex].tacticSelected = null
            }
            
            var scene = {...state.workspace.scenes[state.workspace.sceneIndex]}

            var tactic = element
            tactic.index = index
            tactic.isSelected = true

            scene.tacticSelected = tactic

            var updatedScenes = [...state.workspace.scenes]

            updatedScenes[state.workspace.sceneIndex] = scene


            setState(prevState => {
                return{
                    ...prevState,
                    workspace: {
                        ...prevState.workspace,
                        scenes: updatedScenes

                    }

                }
                
            })
            break;
 /*
            case 'objective':

            //reset prev tactic selected (if there is one)
            if(state.organization.objectiveSelected){
                var objectiveSelectedPrev = state.organization.objectiveSelected
                objectiveSelectedPrev.isSelected = false

            }

            var objective = element
            objective.index = index
            //objective.isSelected = true


            setState(prevState => {
                return{
                    ...prevState,
                    organization: {
                        ...prevState.organization,
                        objectiveSelected: objective

                }

                }
                
            })
            break;

            */
            
        }

    }



    //Render Functions

    const renderAll = () => {

        var style = {
            ...styles.flexColumn,
            height: '100vh',
            width: '100vw',
            margin: '0px',
            padding: '0px'
        }
    
        return (
            <div className="body" style={style} onClick={absoluteMousePosition}>
    
    
                <div className="NavBarRow" style={{backgroundColor: 'whitesmoke', height: '4em', width: '100%', marginBottom: '1em'}}>
    
                        {/**   Aqui va el Navbar Component    */}
                       
                </div>
    
    
                {renderLitestrat()}
    
            </div>
    
         )
    
    }


    const renderLitestrat = () => {
        
    
        var style = {
            ...styles.flexColumn,
            ...styles.padding
        }
        
        return(
            
    
            <div className="LitestratBody" style={style}>
    
                
                    {renderExternalActor()}

                    {renderOrganization()}
                
    
            </div>
    
        )
        
    }


    const renderExternalActor = () => {
        var extActor;

        var scene = state.workspace.scenes[state.workspace.sceneIndex]
        var externalActor = scene.externalActor

        console.log("what is externalActor? ", externalActor)
        if(externalActor){
    
            extActor = (
                <div className="ExternalActorRow" style={styles.flex}>

                    <div className="ExternalActorContainer" style={styles.influencerContainer}>
                        <ExternalActorView  externalActor={externalActor} onClick={() => console.log("do nothing... (log)")}/>
                        
                    </div>
    
                    {/**INFLUENCING ARROW */}
                    <div style={{marginLeft: '1.5em', marginTop: '0.2em'}}>
                        <InfluencingArrowIcon />
                    </div>
                </div>
                
            )
        } else {
            extActor = (
                <div className="InfluencerRow" style={styles.influencerRow}>
                    <div className="InfluencerContainer" style={styles.influencerContainer}>
                        <AddBtnSVG_1 SVG={ExternalActorIcon} title="External Actor Name" description="Description" addElement={addElement} type="externalActor" />
    
                    </div>
                </div>
            )
        }
    
        return extActor
    }



    const renderOrganization = () => {
        var organization;

        var scene = state.workspace.scenes[state.workspace.sceneIndex]
        var externalActor = scene.externalActor

        if(externalActor){
            organization = (
                <div style={styles.litestratContainer}>

                    <div style={styles.organizationHeader}>
                        {/** ORGANIZATION SVG  */}
                        <div style={{display:'flex',justifyContent:'center', alignItems: 'center', marginLeft: '5em'}}>
                            <OrganizationIcon />
                        </div>
                        
                        <div>
                            <p>{externalActor.influencedOrganization}</p>
                        </div>
                        
                    </div>

                    <div style={{position: 'relative', display: 'flex', alignItems: 'baseline', height: '100%', width: '100%'}}>
                        
                        <div 
                            className="GoalRow" 
                            style={
                                {
                                    ...styles.organizationCard,
                                    backgroundColor: '#FFFFFF',
                                    height: '100%',
                                    width: '100%',
                                    zIndex: '1'
                                    
                                }
                            }
                        >
                            
                            {renderGoals()}
                        
                            

                            

                        </div>
                        
                        <div 
                            className="StrategyRow" 
                            style={
                                {
                                    ...styles.organizationCard,
                                    backgroundColor: '#F2F2F2',
                                    height: '80%',
                                    width: '98%',
                                    zIndex: '5'
                                    
                                }
                        }>

                            {renderStrategies()}


                        </div>

                        <div className="TacticRow"
                                style={
                                    {
                                        ...styles.organizationCard,
                                        backgroundColor: '#DCDCDC',
                                        height: '60%',
                                        width: '96%',
                                        zIndex: '10'
                                    }
                        }>

                            {renderTactics()}


                        </div>

                        <div className="ObjectiveRow"
                                style={
                                    {
                                        ...styles.organizationCard,
                                        backgroundColor: '#D0D0D0',
                                        height: '40%',
                                        width: '94%',
                                        zIndex: '15'
                                    }
                                }>


                        </div>

                    </div>

                    
            
                    
                                            
                

                </div>
 
            )
        } else {
            organization = <Fragment/>
        }

        return organization;
    }

 
    const renderGoals = () => {

        var scene = state.workspace.scenes[state.workspace.sceneIndex]

        return(
            <div className="GoalArea" style={{display:'flex',alignItems:'flex-end', width: '85%', height: '100px', marginTop: '1em', marginLeft: '15%'}}>
                                
                {scene.organization.goals.map((goal, index) => {
            
                        return(
                            <GoalView id={goal.id} key={goal.id} goal={goal} onClick={() => selectNode(index, goal, 'goal')} />
            
                        )
            
                })}

                <AddBtnSVG_2 isFirst={scene.organization.goals.length === 0} SVG={GoalIcon} title="Goal Title" description="Description" addElement={addElement} type="goal" />

            </div>

        )
        
    }

    const renderStrategies = () => {

        var scene = state.workspace.scenes[state.workspace.sceneIndex]
        var strategies

        if(scene.goalSelected){
            strategies = (
        
                <div className="StrategyArea" style={{display:'flex',alignItems:'flex-end', width: '85%', height: '100px', marginTop: '1em', marginLeft: '15%'}}>

                    {scene.goalSelected.strategies.map((strategy, index) => {
                        return (
                            <StrategyView id={strategy.id} key={strategy.id} strategy={strategy} onClick={() => selectNode(index, strategy, 'strategy')} />
                        )
                    })}
                
                    <AddBtnSVG_2 isFirst={scene.goalSelected.strategies.length === 0} SVG={StrategyIcon} title="Strategy Title" description="Description" addElement={addElement} type="strategy" />
                </div>
            )
        } else {
            strategies = <Fragment></Fragment>
        }

        return strategies
    }


    const renderTactics = () => {
        var scene = state.workspace.scenes[state.workspace.sceneIndex]
        var tactics

        if(scene.strategySelected){
            tactics = (
        
                <div className="TacticArea" style={{display:'flex',alignItems:'flex-end', width: '85%', height: '100px', marginTop: '1em', marginLeft: '15%'}}>

                    {scene.strategySelected.tactics.map((tactic, index) => {
                        return (
                            <TacticView id={tactic.id} key={tactic.id} tactic={tactic} onClick={() => selectNode(index, tactic, 'tactic')} />
                        )
                    })}
                
                    <AddBtnSVG_2 isFirst={scene.strategySelected.tactics.length === 0} SVG={TacticIcon} title="Tactic Title" description="Description" addElement={addElement} type="tactic" />
                </div>
            )
        } else {
            tactics = <Fragment></Fragment>
        }

        return tactics
        
    }

    //Todas las vistas están aqui
    return(
        <Fragment>
            {renderAll()}
        </Fragment>
        
    )

}











// STYLES

const styles = {
    organizationCard: {
        
        
        position: 'absolute',
        bottom: '0px',
        right: '0px',
        
        borderTopLeftRadius: '4em',
        borderBottomLeftRadius: '4em',
        borderBottomRightRadius: '4em',
    },
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
    externalActorRow: {
        display: 'flex'
    },

    influencerContainerTransparent: {
        width: '72px',
        height: '72px',
        marginLeft: '3em',
        opacity: '0.3'
    },

    influencerContainer: {
        width: '72px',
        height: '72px',
        marginLeft: '3em'
    },

    organizationRow: {
        display: 'flex',
        justifyContent: 'center'
    },

    organizationContainer: {
        width: '72px',
        height: '72px',
        
    },

    relativeDivTeam: {
        position: 'relative',
        marginBottom: '3em'
    },

    absoluteDivTeam: {
        position: 'absolute',
        top: '0px',
        right: '10px',
        height: '30px',
        width: '30px',
        zIndex: '5px'
    },
    relativeDivOrg: {
        position: 'relative',
    },

    absoluteDivOrg: {
        position: 'absolute',
        top: '15px',
        left: '-80px',
        height: '30px',
        width: '30px',
        zIndex: '5px'
    },
    body: {
        display: 'flex',
        flexDirection: 'column',
        height: '100vh',
        width: '100vw',
        
    },

    litestratContainer: {
        display: 'flex',
        flexDirection: 'column',
        //marginTop: '3em',
        marginLeft: '15em',
        backgroundColor: 'whitesmoke',
        width: '1000px',
        height: '700px',
        boxShadow: "-2px 2px 10px #9E9E9E",
        borderRadius: '4em'

    },

    lsRow: {
        display: 'flex',
        flexDirection: 'row',
        marginLeft: '2em',
        marginTop: '2em',
    },

    lsColumn: {
        display: 'flex',
        flexDirection: 'column',
        marginLeft: '5em',
        marginTop: '2em'
    },

    column: {
        display: 'flex',
        flexDirection: 'column',
        width: '12em'
    },

    goalContainer: {
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: 'red',
        
        
    }, 
    strategyRow: {
        display: 'flex',
        flexDirection: 'row',
        marginLeft: '5em',
        marginTop: '2em',
        backgroundColor: Gray1
    },

    tacticRow: {
        display: 'flex',
        flexDirection: 'row',
        marginLeft: '5em',
        marginTop: '2em',
        backgroundColor: Gray2
    },

    objectiveColumn: {
        display: 'flex',
        flexDirection: 'column',
        marginLeft: '5em',
        marginTop: '2em',
        backgroundColor: Gray3,
        width: '25em'
    }

    
}





export default Litestrat