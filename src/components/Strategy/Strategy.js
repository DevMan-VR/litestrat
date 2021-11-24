import React, {Fragment} from 'react'
import { useLitestratContext } from '../Litestrat/LitestratContext'
import { useLitestratCrudContext } from '../Litestrat/LitestratCrudContext'
import StrategyView from './Strategy.view'
import EditWrapper from '../Base/EditWrapper'
import AddBtnSVG_2 from '../Helpers/AddBtn/AddBtnSVG_2'

import PencilIcon from '../../assets/icons/PencilIcon'
import StrategyIcon from '../../assets/icons/StrategyIcon'

const StrategyComponent = () => {

    const {state} = useLitestratContext();
    const {selectElement, addElement, editElement} = useLitestratCrudContext();
    var scene = state.workspace.scenes[state.workspace.sceneIndex];
    var strategyRow;


    const renderStrategies = () => {

        var scene = state.workspace.scenes[state.workspace.sceneIndex]
        var strategies
    
        if(scene.goalSelected){
            strategies = (
        
                <div className="StrategyArea" style={{display:'flex',alignItems:'flex-end', width: '85%', height: '100px', marginTop: '1em', marginLeft: '15%'}}>
    
                    {scene.goalSelected.strategies.map((strategy, index) => {
    
                        var isCurrentSelected = false
                        if(strategy.currentSelect){
                            isCurrentSelected = true
                        }
    
                        return (
                            <Fragment>
                                    
                                    
                                    <StrategyView id={strategy.id} key={strategy.id} strategy={strategy} onClick={() => selectElement(index, strategy, 'strategy')} />
    
                                <div style={{position: 'relative'}}>
                                    <div 
                                        style={{
                                            position: 'absolute',
                                            top: '-75px',
                                            left: '-197px',
                                            display: 'flex',
                                            zIndex: 50,
                                            
                                            
                                        }}
                                    >
                                        
                                        { isCurrentSelected ? 
                                            (
                                                <EditWrapper index={index}  element={strategy} editElement={editElement} type={"strategy"}>
                                                    <PencilIcon />
                                                </EditWrapper>
    
                                            ) : <Fragment/>
                                        }
                                    </div>
                                </div>
                            </Fragment>
                        )
                    })}
                
                    <AddBtnSVG_2 isFirst={scene.goalSelected.strategies.length === 0} SVG={StrategyIcon} title="Nombre de Estrategia" description="Description" addElement={addElement} type="strategy" />
                </div>
            )
        } else {
            strategies = <Fragment></Fragment>
        }
    
        return strategies
    }


    //Render
    if(scene.goalSelected){
        strategyRow = (
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
        )
    } else {
        strategyRow = <Fragment/>
    }

    return strategyRow
}

const styles = {
    organizationCard: {
        position: 'absolute',
        bottom: '0px',
        right: '0px',
        borderTopLeftRadius: '4em',
        borderBottomLeftRadius: '4em',
        borderBottomRightRadius: '4em',
    }
}

export default StrategyComponent;