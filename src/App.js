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



function App() {
    const [state, setState] = useState({
        organization: new Organization()
    })

    useEffect(() => {
        console.log("Cambio de estado: ", state)
    }, [state])


    //selectNode(goal, index)
    const selectNode = (index, element, type) => {
        switch(type) {
            case 'goal':

            var goal = element
            goal.index = index

            setState(prevState => {
                return{
                    ...prevState,
                    organization: {
                        ...prevState.organization,
                        goalSelected: element,
                        strategySelected: null,
                        tacticSelected: null,
                        objectiveSelected: null

                }

                }
                
            })
            break;

            case 'strategy':

            var strategy = element
            strategy.index = index

            setState(prevState => {
                return{
                    ...prevState,
                    organization: {
                        ...prevState.organization,
                        strategySelected: element,
                        tacticSelected: null,
                        objectiveSelected: null

                }

                }
                
            })
            break;


            case 'tactic':

            var tactic = element
            tactic.index = index


            setState(prevState => {
                return{
                    ...prevState,
                    organization: {
                        ...prevState.organization,
                        tacticSelected: element,
                        objectiveSelected: null

                }

                }
                
            })
            break;

            case 'objective':

            var objective = element
            objective.index = index


            setState(prevState => {
                return{
                    ...prevState,
                    organization: {
                        ...prevState.organization,
                        objectiveSelected: element

                }

                }
                
            })
            break;
            
        }

    }

    //addElement(type)
    const addElement = (type) => {
        switch(type) {
            case 'goal':
                var index = Math.floor(Math.random()*10)
                var idGoal = "g"+index
                var title = idGoal+ " Title"
                var description = "description"

                var goal = new Goal(idGoal,null,null,null,title,description,null,false)

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

                var title = idStrategy+ " Title"
                var description = "description"

                var goalSelected = state.organization.goalSelected
                var strategy = new Strategy(idStrategy,null,null,null,title,description,null,false)
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

                var title = idTactic+ " Title"
                var description = "description"

                var goalSelected = state.organization.goalSelected
                var strategySelected = state.organization.strategySelected

                var tactic = new Tactic(idTactic,null,null,null,title,description,null,false)

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
                var title = idObjective+ " Title"
                var description = "description"

                var goalSelected = state.organization.goalSelected
                var strategySelected = state.organization.strategySelected
                var tacticSelected = state.organization.tacticSelected

                var objective = new Objective(idObjective,null,null,null,title,description,null,false)

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
                    <div syle={styles.goalContainer}>
                        {state.organization.goals.map((goal, index) => {
                            return(
                                <GoalView id={goal.id} key={goal.id} goal={goal} onClick={() => selectNode(index, goal, 'goal')} />

                            )

                        })}

                    </div>

                    <AddBtn icon={goalIcon} title="Goal Title" description="Description" onClick={() => addElement('goal')} />
                    
                </div>
        )

        return goalSection
    }

    const renderStrategySection = () => {

        var strategySection
        var goalSelected = state.organization.goalSelected

        if(goalSelected){
            strategySection = (
                <div style={styles.lsRow}>
                        <div className="strategyContainer">
                            {state.organization.goals[goalSelected.index].strategies.map((strategy, index) => {
                                return(
                                    <StrategyView id={strategy.id} key={strategy.id} strategy={strategy} onClick={() => selectNode(index, strategy, 'strategy')} />
                                )
    
                            })}
    
                        </div>
    
                        <AddBtn icon={strategyIcon} title="Strategy Title" description="Description" onClick={() => addElement('strategy')} />
                        
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
                <div style={styles.lsRow}>
                        <div className="tacticContainer">
                            {state.organization.goals[goalSelected.index].strategies[strategySelected.index].tactics.map((tactic, index) => {
                                return(
                                    <TacticView id={tactic.id} key={tactic.id} tactic={tactic} onClick={() => selectNode(index, tactic, 'tactic')} />
                                )
    
                            })}
    
                        </div>
    
                        <AddBtn icon={tacticIcon} title="Tactic Title" description="Description" onClick={() => addElement('tactic')} />
                        
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
                <div style={styles.lsColumn}>
                        <div style={styles.column}>
                            {state.organization.tacticSelected.objectives.map((objective, index) => {
                                return(
                                    <ObjectiveView id={objective.id} key={objective.id} objective={objective} onClick={() => selectNode(index, objective, 'objective')} />

                                )
    
                            })}
    
                        </div>
    
                        <AddBtn icon={objectiveIcon} title="Objective Title" description="Description" onClick={() => addElement('objective')} />
                        
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
        backgroundColor: 'red',
        width: '200px',
        
    }

    
}

export default App;
