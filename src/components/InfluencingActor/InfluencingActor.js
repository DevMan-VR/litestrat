import React, {Fragment} from 'react'
import { useLitestratContext } from '../Litestrat/LitestratContext'
import { useLitestratCrudContext } from '../Litestrat/LitestratCrudContext'

import InfluencingActorView from './InfluencingActor.view'
import EditWrapper from '../Base/EditWrapper'
import PencilIcon from '../../assets/icons/PencilIcon'

import ReceiveArrowIcon from '../../assets/icons/ReceiveArrowIcon'
import SendArrowIcon from '../../assets/icons/SendArrowIcon'

const InfluencingActorComponent = ({externalInfluences}) => {

    const {state} = useLitestratContext()
    const {addElement, editElement, selectElement} = useLitestratCrudContext()

    var scene = state.workspace.scenes[state.workspace.sceneIndex]
    var iActors =  externalInfluences.map((externalInfluence,index) => {

        var icon
        if(externalInfluence.isInfluencer){
            //Flecha hacia la organización
            icon = <SendArrowIcon />


        } else {
            //Flecha hacia el actor
            icon = <ReceiveArrowIcon/>
        }

        var isCurrentSelected = false
        if(externalInfluence.currentSelect){
            isCurrentSelected = true
        }




        return (
                <div className="ExternalInflContainerZ" style={{ display: 'flex'}}>
                    <div style={{display: 'flex', alignItems: 'center'}}>
                        {/**Arrow ICON */}
                        {icon}
                    </div>

                    <div>
                        {/**Element ICON */}
                        <InfluencingActorView externalInfluence={externalInfluence} onClick={() => selectElement(index,externalInfluence,'externalInfluence')} />
                    </div>

                    {/** Edit Icon */}
                    <div style={{position: 'relative'}}>
                        <div 
                            style={{
                                position: 'absolute',
                                top: '-10px',
                                left: '-130px',
                                display: 'flex',
                                zIndex: 10,
                                
                                
                            }}
                        >
                            
                            { isCurrentSelected ? 
                                (
                                    <EditWrapper options={state.workspace.externalInfluences} index={index}  element={externalInfluence} editElement={editElement} type={"externalInfluence"}>
                                        <PencilIcon />
                                    </EditWrapper>

                                ) : <Fragment/>
                            }
                    </div> 

                        
                </div>
                </div>
        )
            
    })

    console.log(iActors)

    return iActors


}

export default InfluencingActorComponent;