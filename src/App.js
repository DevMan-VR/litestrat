/*import React, {useState, useEffect, Fragment, useRef} from 'react'

//Views
import ExternalActorView from './components/ExternalActor/ExternalActor.view.svg.js';
import GoalView from "./components/Goal/Goal.view.svg.js";

import AddBtnSVG_1 from './components/Helpers/AddBtnSVG_1.js'; //For text at bottom
import AddBtnSVG_2 from './components/Helpers/AddBtnSVG_2.js'; //For text aside


//import StrategyView from "./components/Strategy/Strategy.view.js";
//import TacticView from "./components/Tactic/Tactic.view.js";
//import ObjectiveView from "./components/Objective/Objective.view.js";



//Models
import Organization from './components/Organization/Organization.model.js'
import Goal from './components/Goal/Goal.model.js';
import Strategy from './components/Strategy/Strategy.model.js';
import Tactic from './components/Tactic/Tactic.model.js';
import Objective from './components/Objective/Objective.model.js';
import ExternalActor from './components/ExternalActor/ExternalActor.model.js';

//SVGs


//Constants
import {Gray1, Gray2, Gray3} from './constants/Colors.js'


//Dummy Data
import { teamsDummy } from './data/dummy.js';

//Icons
//import goalIcon from './assets/goal-icon.png';
//import strategyIcon from './assets/strategy-icon.png';
//import tacticIcon from "./assets/tactic-icon.png";
//import objectiveIcon from "./assets/objective-icon.png";
//import teamIcon from './assets/team-icon.png'
//import externalActor from './assets/external-actor.png'






function App() {
    const [state, setState] = useState({
        organization: null, //new Organization(),
        teams: teamsDummy,
        externalActor: null
    })


    let goalIcon = null
    let strategyIcon = null
    let tacticIcon = null
    let objectiveIcon = null
    let teamIcon = null
    let externalActor = null


    let externalActorRef = useRef(null)
    let organizationRef = useRef(null)


    useEffect(() => {
        console.log("Cambio de estado: ", state)
    }, [state])



    //selectNode(goal, index)
    const selectNode = (index, element, type) => {

        

        switch(type) {
            case 'goal':

            //reset prev goal selected (if there is one)
            if(state.organization.goalSelected){
                var goalSelectedPrev = state.organization.goalSelected
                goalSelectedPrev.isSelected = false

                //reset prev strategy selected (if there is one)
                if(state.organization.strategySelected){
                    var strategySelectedPrev = state.organization.strategySelected
                    strategySelectedPrev.isSelected = false

                    //reset prev tactic selected (if there is one)
                    if(state.organization.tacticSelected){
                        var tacticSelectedPrev = state.organization.tacticSelected
                        tacticSelectedPrev.isSelected = false

                        //reset prev tactic selected (if there is one)
                        if(state.organization.objectiveSelected){
                            var objectiveSelectedPrev = state.organization.objectiveSelected
                            objectiveSelectedPrev.isSelected = false

                        }

                    }

                }

            }
            

            var goal = element
            goal.index = index
            goal.isSelected = true

           

            setState(prevState => {
                return{
                    ...prevState,
                    organization: {
                        ...prevState.organization,
                        goalSelected: goal,

                    }

                }
                
            })
            break;

            case 'strategy':

            //reset prev strategy selected (if there is one)
            if(state.organization.strategySelected){
                var strategySelectedPrev = state.organization.strategySelected
                strategySelectedPrev.isSelected = false

                //reset prev tactic selected (if there is one)
                if(state.organization.tacticSelected){
                    var tacticSelectedPrev = state.organization.tacticSelected
                    tacticSelectedPrev.isSelected = false

                    //reset prev tactic selected (if there is one)
                    if(state.organization.objectiveSelected){
                        var objectiveSelectedPrev = state.organization.objectiveSelected
                        objectiveSelectedPrev.isSelected = false

                    }

                }

            }

            var strategy = element
            strategy.index = index
            strategy.isSelected = true

            setState(prevState => {
                return{
                    ...prevState,
                    organization: {
                        ...prevState.organization,
                        strategySelected: strategy,
                        tacticSelected: null,
                        objectiveSelected: null

                }

                }
                
            })
            break;


            case 'tactic':

            //reset prev tactic selected (if there is one)
            if(state.organization.tacticSelected){
                var tacticSelectedPrev = state.organization.tacticSelected
                tacticSelectedPrev.isSelected = false

                //reset prev tactic selected (if there is one)
                if(state.organization.objectiveSelected){
                    var objectiveSelectedPrev = state.organization.objectiveSelected
                    objectiveSelectedPrev.isSelected = false

                }

            }

            var tactic = element
            tactic.index = index
            tactic.isSelected = true


            setState(prevState => {
                return{
                    ...prevState,
                    organization: {
                        ...prevState.organization,
                        tacticSelected: tactic,
                        objectiveSelected: null

                }

                }
                
            })
            break;

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
            
        }

    }

    //addElement(type)
    const addElement = (type, data) => {
        const {title, description, until} = data

        switch(type) {
            case 'externalActor':

                

                var index = Math.floor(Math.random()*10)
                var idExternalActor = "EX_ACT"+index
                
                var {label} = data.influencedOrganization
                console.log("LABEL IS::: ",label)
                var externalActor = new ExternalActor(idExternalActor,null,null,data.title,data.influenceDescription,label) //(idGoal,null,null,null,title,description,until,false)
                
                console.log("EL CREADO ES :", externalActor)
                console.log()
                setState(prevState => {
                    return{
                        ...prevState,
                        externalActor: externalActor,
                        organization : new Organization()
                    }
                })
                break;

            case 'goal':

                

                var index = Math.floor(Math.random()*10)
                var idGoal = "g"+index

                var goal = new Goal(idGoal,null,null,null,title,description,until,false)

                setState(prevState => {
                    return{
                        ...prevState,
                        organization: {
                            ...prevState.organization,
                            goals: [
                                ...prevState.organization.goals,
                                goal
                            ]
                        }
                    }
                })
                break;
            
            case 'strategy':

                var idGoal = state.organization.goalSelected.id
                var index = Math.floor(Math.random()*10)
                var idStrategy =  idGoal+"s"+index

                var goalSelected = state.organization.goalSelected
                var strategy = new Strategy(idStrategy,null,null,null,title,description,until,false)
                var newState = {...state}
                newState.organization.goals[goalSelected.index].strategies.push(strategy)
                console.log("NEW STRATEGY")
                console.log(newState)
                setState(newState)
                break;

            case 'tactic':

                var idStrategy = state.organization.strategySelected.id
                var index = Math.floor(Math.random()*10)
                var idTactic =  idStrategy+"t"+index

                var goalSelected = state.organization.goalSelected
                var strategySelected = state.organization.strategySelected

                var tactic = new Tactic(idTactic,null,null,null,title,description,until,false)

                tactic.team = data.team;
                //tactic.team = {...teamsDummy[0]} //por mientras es fijo... (pre-creado)

                var newState = {...state}
                newState.organization.goals[goalSelected.index].strategies[strategySelected.index].tactics.push(tactic)
                console.log("NEW TACTIC")
                console.log(newState)
                setState(newState)
                break;

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
                
                
        }
    }

    const renderGoalSection = () => {

        var isFirst = false;
        if(state.organization.goals.length === 0){
            isFirst = true;
        }

        var goalSection = (
            <div style={styles.lsRow}>
                    
                        {state.organization.goals.map((goal, index) => {
                            
                            return(
                                <GoalView id={goal.id} key={goal.id} goal={goal} onClick={() => selectNode(index, goal, 'goal')} />

                            )

                        })}

                    

                    <AddBtnSVG_2 isFirst={isFirst} SVG={GoalIcon} title="Goal Title" description="Description" addElement={addElement} type="goal" />
                    
                </div>
        )

        return goalSection
    }
/*
    const renderStrategySection = () => {

        var strategySection
        var goalSelected = state.organization.goalSelected

        if(goalSelected){
            strategySection = (
                <div style={styles.strategyRow}>
                        
                        {state.organization.goals[goalSelected.index].strategies.map((strategy, index) => {
                            return(
                                <StrategyView id={strategy.id} key={strategy.id} strategy={strategy} onClick={() => selectNode(index, strategy, 'strategy')} />
                            )

                        })}
    
                        
    
                        <AddBtn icon={strategyIcon} title="Strategy Title" description="Description" addElement={addElement} type="strategy" />
                        
                    </div>
            )

        } else {
            strategySection = (<Fragment></Fragment>)
        }
        

        return strategySection
    }

    const renderTacticSection = () => {

        var tacticSection
        var goalSelected = state.organization.goalSelected
        var strategySelected = state.organization.strategySelected
        
        if(goalSelected && strategySelected){
            tacticSection = (
                <div style={styles.tacticRow}>
                        
                        {state.organization.goals[goalSelected.index].strategies[strategySelected.index].tactics.map((tactic, index) => {
                            return(
                                <TacticView id={tactic.id} key={tactic.id} tactic={tactic} onClick={() => selectNode(index, tactic, 'tactic')} />
                            )

                        })}
    
                        
    
                        <AddBtn icon={tacticIcon} title="Tactic Title" description="Description" addElement={addElement} type="tactic" />
                        
                    </div>
            )

        } else {
            tacticSection = (<Fragment></Fragment>)
        }
        

        return tacticSection
    }

    const renderObjectiveSection = () => {

        var objectiveSection
        if(state.organization.tacticSelected){
            objectiveSection = (
                <div style={styles.objectiveColumn}>
                        
                            {state.organization.tacticSelected.objectives.map((objective, index) => {
                                return(
                                    <ObjectiveView id={objective.id} key={objective.id} objective={objective} onClick={() => selectNode(index, objective, 'objective')} />

                                )
    
                            })}
    
                        
    
                        <AddBtn icon={objectiveIcon} title="Objective Title" description="Description" addElement={addElement} type="objective" />
                        
                        <div style={styles.relativeDivTeam}>
                            <div style={styles.absoluteDivTeam}>
                                <img src={teamIcon} alt="TEAM 1"/>
                                <div>Organization unit 1</div>
                            </div>
                        </div>
                </div>
            )
        } else {
            objectiveSection = (<Fragment></Fragment>)
        }
        

        return objectiveSection
    }

    const renderOrganization = () => {
        var organization;

        if(state.externalActor){
            organization = (
                <div style={styles.litestratContainer}>

                    <div style={styles.organizationHeader}>
                        {/** ORGANIZATION SVG  
                        <div style={{display:'flex',justifyContent:'center', alignItems: 'center', marginLeft: '5em'}}>
                            <OrganizationIcon />
                        </div>
                        
                        <div>
                            <p>{state.externalActor.influencedOrganization}</p>
                        </div>
                        
                    </div>
            
                    
                
                    {renderGoalSection()}
                {/* Falta ahora agregar el Strategy
                    {renderStrategySection()}

                    {renderTacticSection()}

                    {renderObjectiveSection()}
                                            
                

                </div>
 
            )
        } else {
            organization = <Fragment/>
        }

        return organization;
    }

    const renderExternalActor = () => {
        var extActor;
        if(state.externalActor){

            extActor = (
                <div className="InfluencerRow" style={styles.influencerRow}>
                    <div ref={externalActorRef} className="InfluencerContainer" style={styles.influencerContainer}>
                        <ExternalActorView  externalActor={state.externalActor} onClick={() => console.log("do nothing... (log)")}/>
                        
                    </div>

                    {/**INFLUENCING ARROW 
                    <div style={{marginLeft: '0.3em'}}>
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

    return (
        <div style={styles.body} onClick={(e) => {
            var x = e.pageX
            var y = e.pageY

            return console.log(`Mouse Clicked in (${x},${y})`)
        }}>

            <div className="NavBarRow">
                <div className="InfluencerContainer">
                    <p>Navbar ROW</p>

                </div>
            </div>

            

            {renderExternalActor()}
            
            {renderOrganization()}


        </div>

        
    )


}


const styles = {
    organizationHeader: {
        display: 'flex',
        backgroundColor: '#1E4E79',
        fontSize: '2em',
        borderTopLeftRadius:'2em',
        borderTopRightRadius: '2em',
        color: 'whitesmoke',
        fontWeight: '700'
        

    },
    influencerRow: {
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

export default App;

*/
