import React, {Fragment} from 'react'
import { useLitestratContext } from '../Litestrat/LitestratContext'
import { useLitestratCrudContext } from '../Litestrat/LitestratCrudContext'

import RelatedUnitView from './RelatedUnit.view.js'
import EditWrapper from '../Base/EditWrapper'
import PencilIcon from '../../assets/icons/PencilIcon'

import ReceiveArrowIcon from '../../assets/icons/ReceiveArrowIcon'
import SendArrowIcon from '../../assets/icons/SendArrowIcon'

import InfluencingOrgIcon from '../../assets/png/InfluencingOrgIcon.png'
import InfluencingByOrgIcon from '../../assets/png/InfluencingByOrgIcon.png'

const RelatedUnitComponent = ({team, relatedUnits}) => {

    const {state} = useLitestratContext()
    const {addElement, editElement, selectElement} = useLitestratCrudContext()
 
    console.log("Entering into RelatedUnitComponent, Team Props inside is: ",team)

    var scene = state.workspace.scenes[state.workspace.sceneIndex]
    var iRelUnits =  relatedUnits.map((relatedUnit,index) => {

        console.log("Present Related Unit inside Map: ",relatedUnit)



        
    

        var icon
        if(relatedUnit.isInfluencer){
            //Flecha hacia la organización
            icon = InfluencingOrgIcon


        } else {
            //Flecha hacia la unidad organizacional relacionada
            icon = InfluencingByOrgIcon
        }

        var isCurrentSelected = false
        if(relatedUnit.currentSelect){
            isCurrentSelected = true
        }




        return (
                <div className="RelatedUnitContainerZ" style={{ display: 'flex', flexDirection:'column'}}>
                    <div style={{display: 'flex', alignItems: 'center', justifyContent:'center'}}>
                        <div style={{height:'60px'}} >
                            {/**Arrow ICON */}
                            <img src={icon} />

                        </div>
                        
                    </div>

                    <div>
                        {/**Element ICON */}
                        <RelatedUnitView options={state.workspace.teams} teams={state.workspace.teams} relatedUnit={relatedUnit} onClick={() => selectElement(index,relatedUnit,'relatedUnit')} />
                    </div>

                    {/* Edit Icon */}
                    <div style={{position: 'relative'}}>
                        <div 
                            style={{
                                position: 'absolute',
                                top: '-75px',
                                left: '60px',
                                display: 'flex',
                                zIndex: 10,
                                
                                
                            }}
                        >
                            
                            { isCurrentSelected ? 
                                (
                                    <EditWrapper options={state.workspace.teams} team={team} index={index}  element={relatedUnit} editElement={editElement} type={"relatedUnit"}>
                                        <PencilIcon />
                                    </EditWrapper>

                                ) : <Fragment/>
                            }
                    </div> 

                        
                </div>
                </div>
        )
            
    })

    console.log(iRelUnits)

    return iRelUnits


}

export default RelatedUnitComponent;