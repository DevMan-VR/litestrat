import React from 'react'
import litestratImage from '../../assets/png/litestratImg.png'
import BackgroundImage from '../../assets/png/BackgroundImage2.png'
import './Landing.css'

import {Link} from 'react-router-dom'

const Landing = () => {

    return (
        <div style={{height:'1000px'}}>

        
            <div className="BodyContainerRel" style={{position:'relative', height:'800px'}}>

                <div className="backgroundImg" style={{position: 'absolute', width:'100vw', zIndex: -10}}>
                    <img style={{width: '100%', minWidth:'1500px', height: 'auto'}} src={BackgroundImage}/>
                </div>

                <div className="LitestratContent" style={{position:'absolute', display:'flex', flexDirection:'row', marginLeft: '15vw', marginTop:'35vh'}}>

                    <div className="Text" style={{ display:'flex', flexDirection:'column'}}>
                        
                        <span style={{fontSize: '5em', color:'whitesmoke', fontWeight: 700}} class="title">Litestrat Web</span>
                        <span style={{fontSize: '2em', color:'whitesmoke', fontWeight: 300}} class="description"><p>Define y comunica tu estrategia de negocio <br></br><span style={{fontWeight:500}}>sin complicaciones</span></p></span>
                        
                        <div className="LitestratBtn">
                            <Link to="/litestrat">
                            <button style={{backgroundColor:'#FF4E8D', padding:'2em', borderRadius:'1.2em'}} className="btnStyle">
                                <span style={{color:'whitesmoke', fontSize:'2.3em'}} class="btnText"> Pruebalo ahora </span>
                            </button>
                            </Link>
                        </div>
                    </div>

                    

                    <div className="LitestratImage" style={{width:'40vw', marginLeft: '10vw'}}>
                        <img style={{width:'100%', maxWidth:'700px', minWidth:'450px', height:'auto'}} src={litestratImage} />
                    </div>

                </div>

                
                
            </div>
        </div>
    )
}


export default Landing;