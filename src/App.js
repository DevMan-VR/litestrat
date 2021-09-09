import React, {useState, useEffect, Fragment} from 'react'
import Organization from './components/Organization/Organization.model.js'


//Views
import AddBtn from './components/Helpers/AddBtn.js';
import GoalView from "./components/Goal/Goal.view.js";
import StrategyView from "./components/Strategy/Strategy.view.js";
import TacticView from "./components/Tactic/Tactic.view.js";
import ObjectiveView from "./components/Objective/Objective.view.js";


//Models


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

    //addElement(type)

    const renderGoalSection = () => {
        var goalSection = (
            <div style={styles.lsRow}>
                    <div className="goalContainer">
                        {state.organization.goals.map((goal, index) => {
                            <GoalView id={goal.id} key={goal.id} goal={goal} onClick={() => console.log("selecting node goal")} />

                        })}

                    </div>

                    <AddBtn icon={goalIcon} title="Goal Title" description="Description" onClick={() => {}} />
                    
                </div>
        )

        return goalSection
    }

    const renderStrategySection = () => {

        var strategySection
        if(state.organization.goalSelected){
            strategySection = (
                <div style={styles.lsRow}>
                        <div className="strategyContainer">
                            {state.organization.goalSelected.strategies.map((strategy, index) => {
                                <StrategyView id={strategy.id} key={strategy.id} strategy={strategy} onClick={() => console.log("selecting node strategy")} />
    
                            })}
    
                        </div>
    
                        <AddBtn icon={strategyIcon} title="Strategy Title" description="Description" onClick={() => {}} />
                        
                    </div>
            )

        } else {
            strategySection = (<Fragment></Fragment>)
        }
        

        return strategySection
    }

    const renderTacticSection = () => {

        var tacticSection
        if(state.organization.strategySelected){
            tacticSection = (
                <div style={styles.lsRow}>
                        <div className="tacticContainer">
                            {state.organization.strategySelected.tactics.map((tactic, index) => {
                                <TacticView id={tactic.id} key={tactic.id} tactic={tactic} onClick={() => console.log("selecting node tactic")} />
    
                            })}
    
                        </div>
    
                        <AddBtn icon={tacticIcon} title="Tactic Title" description="Description" onClick={() => {}} />
                        
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
                <div style={styles.lsRow}>
                        <div className="objectiveContainer">
                            {state.organization.tacticSelected.objectives.map((objective, index) => {
                                <ObjectiveView id={objective.id} key={objective.id} objective={objective} onClick={() => console.log("selecting node objective")} />
    
                            })}
    
                        </div>
    
                        <AddBtn icon={objectiveIcon} title="Objective Title" description="Description" onClick={() => {}} />
                        
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
        marginLeft: '5em',
        marginTop: '2em'
    },

    lsColumn: {
        marginLeft: '5em',
        marginTop: '2em'
    }

    
}

export default App;
