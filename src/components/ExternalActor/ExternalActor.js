import React, {Fragment} from 'react'
import { useLitestratContext } from '../Litestrat/LitestratContext';

import ExternalActorView from './ExternalActor.view.svg.js';
import InfluencingArrowIcon from '../../assets/icons/InfluencingArrowIcon';
import EditWrapper from '../Base/EditWrapper';
import AddBtnSVG_1 from '../Helpers/AddBtn/AddBtnSVG_1';

import PencilIcon from '../../assets/icons/PencilIcon';
import ExternalActorIcon from '../../assets/icons/ExternalActorIcon';

const ExternalActor = () => {

    const {state} = useLitestratContext()

    var extActor;
    var scene = state.workspace.scenes[state.workspace.sceneIndex]
    var externalActor = scene.externalActor
    var externalActors = state.workspace.externalActors

    if(externalActor){
        var isCurrentSelected = externalActor.currentSelect

        extActor = 
        (
            <Fragment>

                <div className="ExternalActorContainer" style={styles.influencerContainer}>
                    <ExternalActorView  externalActor={externalActor}/>
                    
                </div>

                {/**INFLUENCING ARROW */}
                <div className="ArrowContainer" style={styles.arrowContainer}>
                    <InfluencingArrowIcon />
                </div>

                

                <div style={{display:'flex', position:'relative'}}>
                    <div 
                        style={{
                            display: 'flex', 
                            position: 'absolute', 
                            top: '-35px',
                            left: '-390px',
                            height: '30px',
                            width: '300px',
                        }}>

                        <p style={{fontSize: '0.9em'}}>{externalActor.description}</p>

                    </div>
                </div>

                <div style={{position: 'relative'}}>
                        <div 
                            style={{
                                position: 'absolute',
                                top: '7px',
                                left: '-565px',
                                display: 'flex',
                                zIndex: 10,
                                
                                
                            }}
                        >
                            
                            { isCurrentSelected ? 
                                (
                                    <EditWrapper externalActors={externalActors}  element={externalActor} type={"externalActor"}>
                                        <PencilIcon />
                                    </EditWrapper>

                                ) : <Fragment/>
                            }
                        </div> 

                        
                </div>

            </Fragment>
            
        )
    } else {
        extActor = (

            <div className="InfluencerContainer" style={styles.influencerContainer}>
                <AddBtnSVG_1 externalActors={externalActors} SVG={ExternalActorIcon} title="Nombre del Actor Externo" description="Description" type="externalActor" />

            </div>

        )
    }

    return extActor

}


const styles = {
    influencerContainer: {
        marginLeft: '3em'
    },
    arrowContainer: {
        marginLeft: '3em', 
        marginTop: '0.2em'
    }
}


export default ExternalActor