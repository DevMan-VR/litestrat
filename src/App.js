import React, {useState, useEffect, Fragment} from 'react'

//Views
import AddBtn from './components/Helpers/AddBtn.js';
import GoalView from "./components/Goal/Goal.view.js";
import StrategyView from "./components/Strategy/Strategy.view.js";
import TacticView from "./components/Tactic/Tactic.view.js";
import ObjectiveView from "./components/Objective/Objective.view.js";


//Models
import Organization from './components/Organization/Organization.model.js'
import Goal from './components/Goal/Goal.model.js';
import Strategy from './components/Strategy/Strategy.model.js';
import Tactic from './components/Tactic/Tactic.model.js';
import Objective from './components/Objective/Objective.model.js';

//Icons
import goalIcon from './assets/goal-icon.png';
import strategyIcon from './assets/strategy-icon.png';
import tacticIcon from "./assets/tactic-icon.png";
import objectiveIcon from "./assets/objective-icon.png";
import teamIcon from './assets/team-icon.png'

//Constants
import {Gray1, Gray2, Gray3} from './constants/Colors.js'


//Dummy Data
import { teamsDummy } from './data/dummy.js';

function App() {
    const [state, setState] = useState({
        organization: new Organization(),
        teams: teamsDummy
    })

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
        var goalSection = (
            <div style={styles.lsRow}>
                    
                        {state.organization.goals.map((goal, index) => {
                            
                            return(
                                <GoalView id={goal.id} key={goal.id} goal={goal} onClick={() => selectNode(index, goal, 'goal')} />

                            )

                        })}

                    

                    <AddBtn icon={goalIcon} title="Goal Title" description="Description" addElement={addElement} type="goal" />
                    
                </div>
        )

        return goalSection
    }

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
                        
                        <div style={styles.relativeDiv}>
                            <div style={styles.absoluteDiv}>
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

    return (
        <div style={styles.body}>
            <div style={styles.litestratContainer}>
                <p>Dummy Organization</p>

                {renderGoalSection()}

                {renderStrategySection()}

                {renderTacticSection()}

                {renderObjectiveSection()}
                


            </div>
        </div>
    )


}


const styles = {
    relativeDiv: {
        position: 'relative',
        marginBottom: '3em'
    },

    absoluteDiv: {
        position: 'absolute',
        top: '0px',
        right: '10px',
        height: '30px',
        width: '30px',
        zIndex: '5px'
    },
    body: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        
        height: '100vh',
        width: '100vw',
        
    },

    litestratContainer: {
        display: 'flex',
        flexDirection: 'column',
        marginTop: '5em',
        backgroundColor: 'gray',
        width: '1200px',
        height: '800px',
        backgroundColor: '#f2f2f2'
    },

    lsRow: {
        display: 'flex',
        flexDirection: 'row',
        marginLeft: '5em',
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
