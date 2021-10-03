import React, {Fragment} from 'react'
import { useLitestratContext } from '../Litestrat/LitestratContext';
import { useLitestratCrudContext } from '../Litestrat/LitestratCrudContext';

import TacticView from './Tactic.view';
import EditWrapper from '../Base/EditWrapper';

import PencilIcon from '../../assets/icons/PencilIcon';
import AddBtnSVG_2 from '../Helpers/AddBtn/AddBtnSVG_2';
import TacticIcon from '../../assets/icons/TacticIcon';

const TacticComponent = () => {


    const {state} = useLitestratContext();
    const {addElement, editElement, selectElement} = useLitestratCrudContext();

    var scene = state.workspace.scenes[state.workspace.sceneIndex]
    var tacticRow;


    const renderTactics = () => {
        var scene = state.workspace.scenes[state.workspace.sceneIndex]
        var tactics
    
        if(scene.strategySelected){
            tactics = (
        
                <div className="TacticArea" style={{display:'flex',alignItems:'flex-end', width: '85%', height: '100px', marginTop: '1em', marginLeft: '15%'}}>
    
                    {scene.strategySelected.tactics.map((tactic, index) => {
    
                        var isSelected = false
                        if(tactic.isSelected){
                            isSelected = true
                        }
    
                        return (
                            <Fragment>
    
                                <TacticView options={state.workspace.teams} id={tactic.id} key={tactic.id} tactic={tactic} onClick={() => selectElement(index, tactic, 'tactic')} />
                                
                                <div style={{position: 'relative'}}>
                                        <div 
                                            style={{
                                                position: 'absolute',
                                                top: '-100px',
                                                left: '-40px',
                                                display: 'flex',
                                                zIndex: 50,
                                                
                                                
                                            }}
                                        >
                                            
                                            { isSelected ? 
                                                (
                                                    <EditWrapper index={index}  element={tactic} editElement={editElement} type={"tactic"}>
                                                        <PencilIcon />
                                                    </EditWrapper>
    
                                                ) : <Fragment/>
                                            }
                                        </div>
                                    </div>
    
                            </Fragment>
                            
                        
                            )
                    })}
                
                    <AddBtnSVG_2 teams={state.workspace.teams} isFirst={scene.strategySelected.tactics.length === 0} SVG={TacticIcon} title="Nombre de Táctica" description="Description" addElement={addElement} type="tactic" />
                </div>
            )
        } else {
            tactics = <Fragment></Fragment>
        }
    
        return tactics
        
    }


    //Render
    if(scene.strategySelected){
        tacticRow = (
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
        )
    } else {
        tacticRow = <Fragment/>
    }

    return tacticRow
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
}


export default TacticComponent