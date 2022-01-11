import React, {Fragment} from 'react'
import { useLitestratContext } from '../Litestrat/LitestratContext'
import { useLitestratCrudContext } from '../Litestrat/LitestratCrudContext'

import RelatedUnitView from './RelatedUnit.view.js'
import InfluencingOrgIcon from '../../assets/png/InfluencingOrgIcon.png'
import InfluencingByOrgIcon from '../../assets/png/InfluencingByOrgIcon.png'


const RelatedUnitComponent = ({team, relatedUnits}) => {

    const {state} = useLitestratContext()
    const {addElement, editElement, selectElement} = useLitestratCrudContext()
 
    console.log("Entering into RelatedUnitComponent, Team Props inside is: ",team)

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





        return (
                <div className="RelatedUnitContainerZ" style={{ display: 'flex', flexDirection:'column'}}>
                    <div style={{display: 'flex', alignItems: 'center', justifyContent:'center'}}>
                        <div style={{height:'50px', width:'40px'}} >
                            {/**Arrow ICON */}
                            <img style={{maxWidth: '100%', height:'auto'}} src={icon} />

                        </div>
                        
                    </div>

                    <div>
                        {/**Element ICON */}
                        <RelatedUnitView 
                            index={index}
                            options={state.workspace.teams} 
                            teams={state.workspace.teams} 
                            relatedUnit={relatedUnit} 
                            onClick={() => selectElement(index,relatedUnit,'relatedUnit')} 
                            className={"relatedUnit_"+index}
                        />
                    </div>

                            
                </div> 

                        
          
        )
            
    })

    console.log(iRelUnits)

    return iRelUnits


}

export default RelatedUnitComponent;