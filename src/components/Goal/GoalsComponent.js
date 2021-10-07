import React, {Fragment} from 'react'
import { useLitestratContext } from '../Litestrat/LitestratContext'
import { useLitestratCrudContext } from '../Litestrat/LitestratCrudContext';
import EditWrapper from '../Base/EditWrapper';

import GoalIcon from '../../assets/icons/GoalIcon';
import GoalView from './Goal.view';
import PencilIcon from '../../assets/icons/PencilIcon';
import AddBtnSVG_2 from '../Helpers/AddBtn/AddBtnSVG_2';

const GoalsComponent = () => {

    const {state} = useLitestratContext();
    const {addElement, editElement, selectElement} = useLitestratCrudContext()

    var scene = state.workspace.scenes[state.workspace.sceneIndex]


    const renderGoals = () => {

    
        return(
            <div className="GoalArea" style={styles.goalArea}>
                                
                {scene.organization.goals.map((goal, index) => {
    
                        var isCurrentSelected = false
                        if(goal.currentSelect){
                            isCurrentSelected = true;
                        }
            
                        return(
                            <Fragment>
                                <GoalView id={goal.id} key={goal.id} goal={goal} onClick={() => selectElement(index, goal, 'goal')} />
    
                               
                                <div style={{position: 'relative'}}>
                                    <div 
                                        style={{
                                            position: 'absolute',
                                            top: '-75px',
                                            left: '-127px',
                                            display: 'flex',
                                            zIndex: 50,
                                            
                                            
                                        }}
                                    >
                                        
                                        { isCurrentSelected ? 
                                            (
                                                <EditWrapper index={index}  element={goal} type={"goal"}>
                                                    <PencilIcon />
                                                </EditWrapper>
    
                                            ) : <Fragment/>
                                        }
                                    </div>
                                </div>
                            </Fragment>
            
                        )
            
                })}
    
                <AddBtnSVG_2 isFirst={scene.organization.goals.length === 0} SVG={GoalIcon} title="Nombre de Meta" description="Description" addElement={addElement} type="goal" />
    
            </div>
    
        )
        
    }

    var goals;

    if(scene.organization){
        goals = (
                
                <Fragment> 
                    {renderGoals()}
                </Fragment>

                
            

        )
    } else {
        goals = <Fragment/>
    }
    

    return goals
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
        marginLeft: '15%'
    }
}


export default GoalsComponent;