import React, {Fragment} from 'react'
import { useLitestratContext } from '../Litestrat/LitestratContext';
import { useLitestratCrudContext } from '../Litestrat/LitestratCrudContext';
import ObjectiveView from './Objective.view';
import EditWrapper from '../Base/EditWrapper';
import PencilIcon from '../../assets/icons/PencilIcon';
import AddBtnSVG_2 from '../Helpers/AddBtn/AddBtnSVG_2';
import ObjectiveIcon from '../../assets/icons/ObjectiveIcon';
import OrganizationIcon from '../../assets/icons/OrganizationIcon';

const ObjectiveComponent = () => {

    const {state} = useLitestratContext()
    const {addElement, editElement, selectElement} = useLitestratCrudContext()

    var scene = state.workspace.scenes[state.workspace.sceneIndex]
    var objectiveRow;


    const renderObjectives = () => {
        var scene = state.workspace.scenes[state.workspace.sceneIndex]
        var objectives
    
        if(scene.tacticSelected){
            objectives = (
        
                <div className="ObjectiveArea" style={{display:'flex',alignItems:'flex-start', width: '85%', height: '100%', marginTop: '1em', marginLeft: '15%',flexWrap: 'wrap' }}>
    
                    {scene.tacticSelected.objectives.map((objective, index) => {
    
                        var isCurrentSelected = false;
                        if(objective.currentSelect){
                            isCurrentSelected = true
                        }
    
                        return (
                            <Fragment>
    
                                <ObjectiveView options={scene.tacticSelected.team.roles} id={objective.id} key={objective.id} objective={objective} onClick={() => selectElement(index, objective, 'objective')} />
    
                                <div style={{position: 'relative'}}>
                                    <div 
                                        style={{
                                            position: 'absolute',
                                            top: '11px',
                                            left: '-218px',
                                            display: 'flex',
                                            zIndex: 50,
                                            
                                            
                                        }}
                                    >
                                        
                                        { isCurrentSelected ? 
                                            (
                                                <EditWrapper index={index}  element={objective} editElement={editElement} type={"objective"}>
                                                    <PencilIcon />
                                                </EditWrapper>
    
                                            ) : <Fragment/>
                                        }
                                    </div>
                                </div>
    
                            </Fragment>
                        )
                    })}
                
                    <AddBtnSVG_2 roles={scene.tacticSelected.team.roles} isFirst={scene.tacticSelected.objectives.length === 0} SVG={ObjectiveIcon} title="Nombre de Objetivo" description="Description" addElement={addElement} type="objective" />
                </div>
            )
        } else {
            objectives = <Fragment></Fragment>
        }
    
        return objectives
        
    }


    //Render
    if(scene.tacticSelected){
        objectiveRow = (
            <div className="ObjectiveRow"
                style={
                    {
                        ...styles.organizationCard,
                        backgroundColor: '#D0D0D0',
                        height: '40%',
                        width: '94%',
                        zIndex: '15'
                    }
                }
            >

                {renderObjectives()}

                <div 
                    className="OrganizationInfoContainer"
                    style={{display: 'flex', position:'relative', height: '200px', width:'300px'}}
                    
                >
                    <div 
                        className="OrganizationInfoCard"
                        style={styles.organizationInfoCard}
                    >

                        {/** Organization Holder */}
                        <div>
                            <OrganizationIcon />
                            <div>
                                {state.workspace.scenes[state.workspace.sceneIndex].tacticSelected.team.title}
                            </div>

                        </div>
                       
                    </div>

                </div>
                        


            </div>
        )
    } else {
        objectiveRow = <Fragment/>
    }

    return objectiveRow

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

    }
}


export default ObjectiveComponent;