import './Litestrat.css'
import React, {useState, useEffect, Fragment, useRef} from 'react'

//Views
import ExternalActorView from './components/ExternalActor/ExternalActor.view.svg.js';
import GoalView from "./components/Goal/Goal.view.js";
import StrategyView from './components/Strategy/Strategy.view.js';
import TacticView from './components/Tactic/Tactic.view.js';
import ObjectiveView from './components/Objective/Objective.view';
import InfluencingActorView from './components/InfluencingActor/InfluencingActor.view';

import AddBtnSVG_1 from './components/Helpers/AddBtn/AddBtnSVG_1.js'; //For text at bottom
import AddBtnSVG_2 from './components/Helpers/AddBtn/AddBtnSVG_2.js'; //For text aside

//Models
import Organization from './components/Organization/Organization.model.js'
import Goal from './components/Goal/Goal.model.js';
import Strategy from './components/Strategy/Strategy.model.js';
import Tactic from './components/Tactic/Tactic.model.js';
import Objective from './components/Objective/Objective.model.js';
import ExternalActor from './components/ExternalActor/ExternalActor.model.js';
import ExternalInfluence from './components/InfluencingActor/InfluencingActor.model';

//SVGs
import GoalIcon from './assets/icons/GoalIcon.js';
import StrategyIcon from './assets/icons/StrategyIcon.js';
import TacticIcon from './assets/icons/TacticIcon.js';
import ObjectiveIcon from './assets/icons/ObjectiveIcon.js';
import ExternalActorIcon from './assets/icons/ExternalActorIcon.js';
import InfluencingArrowIcon from './assets/icons/InfluencingArrowIcon.js';
import OrganizationIcon from './assets/icons/OrganizationIcon.js';
import InfluencedArrowIcon from './assets/icons/InfluencedArrowIcon';
import InfluencedActorIcon from './assets/icons/InfluencedActorIcon';
import InfluencingArrowIcon2 from './assets/icons/InfluencingArrowIcon2';

//Constants
import {Gray1, Gray2, Gray3} from './constants/Colors.js'

//Dummy Data
import { teamsDummy } from './data/dummy.js';

import { absoluteMousePosition } from './LitestratCore.js';

const Litestrat = () => {

    const [state, setState] = useState({

        //El workspace se deberia cargar según via GET del server según sea el caso, si no crear uno nuevo
        workspace: {
            scenes: [
                {
                    //Por defecto se inicializará el workspace con una escena (la que se muestra)
                    organization: null, //new Organization()
                    externalActorSelected: null,
                    goalSelected: null,
                    strategySelected: null,
                    tacticSelected: null,
                    objectiveSelected: null,
                    teamSelected: null,
                    roleSelected: null,
                    externalInfluenceSelected: null,

                    allTactics: [],
                    influencingActors: [
                    /*{
                        title: 'External dummy 1',
                        isInfluencer: true
                    },
                    {
                        title: 'External dummy 2',
                        isInfluencer: false
                    }*/
                ]
                }
            ],

            //Los teams son las unidades organizacionales, estos se pueden utilizar a lo largo de toda las escenas (dentro del workspace)
            teams: teamsDummy,
            sceneIndex: 0
        },
        
    })


    useEffect(() => {
        console.log("Cambio de estado: ", state)
    }, [state])




    //Add Element FX
    const addElement = (type, data) => {

        //Getting a clone object of current scene
        var scene = state.workspace.scenes[state.workspace.sceneIndex]
        var updatedScene = {...scene}
    
        switch(type) {

            case 'externalActor':
    
                var index = Math.floor(Math.random()*10)
                var idExternalActor = "EX_ACT"+index
                //var {label} = data.influencedOrganization
                var label = data.influencedOrganization
                var externalActor = new ExternalActor(idExternalActor,null,null,data.title,data.influenceDescription,label)
                console.log("EL CREADO ES :", externalActor)

                

                //Adding External Actor & Organization
                updatedScene.externalActor = externalActor
                updatedScene.organization = new Organization()
                
                var scenes = [...state.workspace.scenes]
                scenes[state.workspace.sceneIndex] = updatedScene


                setState(prevState => {
                    return{
                        ...prevState,
                        workspace: {
                            ...prevState.workspace,
                            scenes: [...scenes]
                        }
                        
                    }
                })
                break;

                case 'influencingActor':
    
                    var index = Math.floor(Math.random()*10)
                    var idExternalInfluence = "EX_ACT_INF"+index
                    //var {label} = data.influencedOrganization
                    var label = data.associatedTactic
                    var externalInfluence = new ExternalInfluence(idExternalInfluence,null,null,data.title,data.description,label)
                    console.log("EL INFLUENCER EXTERNO CREADO ES :", externalInfluence)
    
                    externalInfluence.isInfluencer = data.isInfluencer
    
                    //Adding External Influencer & Organization
                    updatedScene.influencingActors.push(externalInfluence)
                    
                    var scenes = [...state.workspace.scenes]
                    scenes[state.workspace.sceneIndex] = updatedScene
    
    
                    setState(prevState => {
                        return{
                            ...prevState,
                            workspace: {
                                ...prevState.workspace,
                                scenes: [...scenes]
                            }
                            
                        }
                    })
                    break;
    
    
            case 'goal':
    
                var index = Math.floor(Math.random()*10)
                var idGoal = "g"+index
    
                var goal = new Goal(idGoal,null,null,null,data.title,data.description,data.until,false)

                //Adding a new Goal
                updatedScene.organization.goals.push(goal)
                
                var scenes = [...state.workspace.scenes]
                scenes[state.workspace.sceneIndex] = updatedScene
    
                setState(prevState => {
                    return{
                        ...prevState,
                        workspace: {
                            ...prevState.workspace,
                            scenes: [...scenes]
                        }
                    }
                })
                break;
            
            case 'strategy':
    
                var idGoal = state.workspace.scenes[state.workspace.sceneIndex].goalSelected.id
                var index = Math.floor(Math.random()*10)
                var idStrategy =  idGoal+"s"+index
    
                var goalSelected = state.workspace.scenes[state.workspace.sceneIndex].goalSelected
                var strategy = new Strategy(idStrategy,null,null,null,data.title,data.description,data.until,false)

                var newState = {...state}
                newState.workspace.scenes[newState.workspace.sceneIndex].organization.goals[goalSelected.index].strategies.push(strategy)

                console.log("NEW STRATEGY")
                console.log(newState)
                setState(newState)
                break;
    
            case 'tactic':
                

                var idStrategy =  scene.strategySelected.id
                var index = Math.floor(Math.random()*10)
                var idTactic =  idStrategy+"t"+index
    
                var goalSelected = updatedScene.goalSelected
                var strategySelected = updatedScene.strategySelected
    
                var tactic = new Tactic(idTactic,null,null,null,data.title,data.description,data.until,false)
    
                //console.log("TEAM VALUE IS:", data.team.value)
                var teamIndex = state.workspace.teams.findIndex( team => team.title === data.team.value)
                var newState = {...state}
                //console.log("TEAM INDEX ISS: ", teamIndex)
                if(teamIndex === -1){
                    console.log("Se ha creado un nuevo team")
                    var team = {
                        id: data.team.value,
                        department: 'Por defecto TI',
                        title: data.team.value,
                        roles: []
                    }

                    newState.workspace.teams.push(team)
                    var newIndex = newState.workspace.teams.length - 1
                    tactic.teamIndex = newIndex;
                    tactic.team = newState.workspace.teams[newIndex]



                } else {
                    console.log("Se ha encontrado el team que se buscaba")
                    tactic.teamIndex = teamIndex
                    tactic.team = newState.workspace.teams[teamIndex]
                }
                
    
                newState.workspace.scenes[newState.workspace.sceneIndex].allTactics.push(tactic)
                newState.workspace.scenes[newState.workspace.sceneIndex].organization.goals[goalSelected.index].strategies[strategySelected.index].tactics.push(tactic)
                
                console.log("NEW TACTIC")
                console.log(newState)
                setState(newState)
                break;

            case 'objective':
    
                var idTactic =  scene.tacticSelected.id
                var index = Math.floor(Math.random()*10)
    
                var idObjective = idTactic+"g"+index
    
                var goalSelected = updatedScene.goalSelected
                var strategySelected = updatedScene.strategySelected
                var tacticSelected = updatedScene.tacticSelected
    
                var objective = new Objective(idObjective,null,null,null,data.title,data.description,data.until,false)
    
                var roleName = data.role.value

                var roleIndex = tacticSelected.team.roles.findIndex(role => role.title === roleName)

                var role
                if(roleIndex === -1){
                    //No encontró el rol y por lo tanto se debe crear
                    console.log("Se crea un nuevo rol")
                    role = {
                        id: roleName,
                        title: roleName,
                        userId: '529458d0-b784-4c09-9bbb-4462a69ce323', //por defecto
                        username: 'John Von Neumann' //por defecto
                    }

                    tacticSelected.team.roles.push(role)

                } else {
                    //Si encontró el rol por lo tanto lo relaciona
                    console.log("Se encuentra el rol y se asigna")
                    role = tacticSelected.team.roles[roleIndex]
                }

                objective.role = role

                var newState = {...state}
                newState.workspace.scenes[state.workspace.sceneIndex].organization.goals[goalSelected.index].strategies[strategySelected.index].tactics[tacticSelected.index].objectives.push(objective)
                console.log("NEW OBJECTIVE")
                console.log(newState)
                setState(newState)
                break;
                
        

        }
    }


    //Logica: Esta función recibe el elemento actualizado del formulario
    // Que ha sido previamente seleccionado y actualiza el estado con los nuevos datos

    const editElement = (updatedElement, type) => {

        var sceneIndex = state.workspace.sceneIndex
        var scene = state.workspace.scenes[sceneIndex]
        var updatedScene = {...scene}
        var newState = {...state}

        switch(type){
            case 'externalActor': updatedScene.externalActor = {...updatedElement}; break;
            case 'goal': updatedScene.selectedGoal = {...updatedElement}; break;
            case 'strategy': updatedScene.selectedStrategy = {...updatedElement}; break;
            case 'tactic': updatedScene.selectedTactic = {...updatedElement}; break;
            case 'objective': updatedScene.selectedObjective = {...updatedElement}; break;
            case 'externalInfluence': updatedScene.selectedExternalInfluence = {...updatedElement}; break;
            case 'team': updatedScene.selectedTeam = {...updatedElement}; break;
            case 'role': updatedScene.selectedRole = {...updatedElement}; break;
        }

        console.log("This is the received element: ", updatedElement)
        console.log("This is the updatedScene after edited element: ", updatedScene)

        newState.workspace.scenes[sceneIndex] = {...updatedScene}

        setState(newState)


    }


    //Select Element FX
    const selectNode = (index, element, type) => {

        var updatedScenes = [...state.workspace.scenes]
        var scene = {...state.workspace.scenes[state.workspace.sceneIndex]}

        switch(type) {

            case 'externalActor':

                scene.externalActorSelected = false;
                var externalActor = element;
                externalActor.isSelected = !externalActor.isSelected;
                scene.externalActorSelected = externalActor

                console.log("Selecting external actor: ", element)
                updatedScenes[state.workspace.sceneIndex] = scene

            break;

            case 'goal':

            //reset prev goal selected (if there is one)
            if(scene.goalSelected){
                scene.goalSelected.isSelected = false
                scene.goalSelected = null

                //reset prev strategy selected (if there is one)
                if(scene.strategySelected){
                    scene.strategySelected.isSelected = false
                    scene.strategySelected = null

                    //reset prev tactic selected (if there is one)
                    if(scene.tacticSelected){
                        scene.tacticSelected.isSelected = false
                        scene.tacticSelected = null

                        //reset prev objective selected (if there is one)
                        if(scene.objectiveSelected){
                            scene.objectiveSelected.isSelected = false
                            scene.objectiveSelected = null

                        }
                    }
                }
            }
            
            


            var goal = element
            goal.index = index
            goal.isSelected = true

            scene.goalSelected = goal

            updatedScenes[state.workspace.sceneIndex] = scene
           
            break;

            
            case 'strategy':

            //reset prev strategy selected (if there is one)
            if(scene.strategySelected){
                scene.strategySelected.isSelected = false
                scene.strategySelected = null

                //reset prev tactic selected (if there is one)
                if(scene.tacticSelected){
                    scene.tacticSelected.isSelected = false
                    scene.tacticSelected = null

                    //reset prev objective selected (if there is one)
                    if(scene.objectiveSelected){
                        scene.objectiveSelected.isSelected = false
                        scene.objectiveSelected = null

                    }
                }
            }
            

            var strategy = element
            strategy.index = index
            strategy.isSelected = true

            scene.strategySelected = strategy

            updatedScenes[state.workspace.sceneIndex] = scene

            break;

       
            case 'tactic':

            //reset prev tactic selected (if there is one)
            if(state.workspace.scenes[state.workspace.sceneIndex].tacticSelected){
                state.workspace.scenes[state.workspace.sceneIndex].tacticSelected.isSelected = false
                state.workspace.scenes[state.workspace.sceneIndex].tacticSelected = null

                //reset prev objective selected (if there is one)
                if(state.workspace.scenes[state.workspace.sceneIndex].objectiveSelected){
                    state.workspace.scenes[state.workspace.sceneIndex].objectiveSelected.isSelected = false
                    state.workspace.scenes[state.workspace.sceneIndex].objectiveSelected = null

                }
            }
            
            var tactic = element
            tactic.index = index
            tactic.isSelected = true

            scene.tacticSelected = tactic

            updatedScenes[state.workspace.sceneIndex] = scene

            break;
 
            case 'objective':

            //reset prev tactic selected (if there is one)
            if(state.workspace.scenes[state.workspace.sceneIndex].objectiveSelected){
                state.workspace.scenes[state.workspace.sceneIndex].objectiveSelected.isSelected = false
                state.workspace.scenes[state.workspace.sceneIndex].objectiveSelected = null

            }

            var objective = element
            objective.index = index
            objective.isSelected = true

            scene.objectiveSelected = objective
            
            updatedScenes[state.workspace.sceneIndex] = scene

            break;  
        }

        //End switch and setting 
        setState(prevState => {
            return{
                ...prevState,
                workspace: {
                    ...prevState.workspace,
                    scenes: updatedScenes

                }

            }
            
        })

    }



    //Render Functions

    const renderAll = () => {

        var style = {
            ...styles.flexColumn,
            height: '100vh',
            width: '100vw',
            margin: '0px',
            padding: '0px'
        }
    
        return (
            <div className="body" style={style} onClick={absoluteMousePosition}>
    
    
                <div className="NavBarRow" style={{backgroundColor: 'whitesmoke', height: '4em', width: '100%', marginBottom: '1em'}}>
    
                        {/**   Aqui va el Navbar Component    */}
                       
                </div>
    
    
                {renderLitestrat()}
    
            </div>
    
         )
    
    }


    const renderLitestrat = () => {
        
    
        var style = {
            ...styles.flexColumn,
            ...styles.padding
        }
        
        return(
            
    
            <div className="LitestratBody" style={style}>
    
                    {renderExternalActor()}

                    {renderOrganization()}
                
    
            </div>
    
        )
        
    }


    const renderExternalActor = () => {
        var extActor;

        var scene = state.workspace.scenes[state.workspace.sceneIndex]
        var externalActor = scene.externalActor

        console.log("what is externalActor? ", externalActor)
        if(externalActor){
    
            extActor = (
                <div className="ExternalActorRow" style={styles.flex}>

                    <div className="ExternalActorContainer" style={styles.influencerContainer}>
                        <ExternalActorView  externalActor={externalActor} editElement={editElement} selectNode={() => selectNode(null,externalActor,'externalActor')}/>
                        
                    </div>
    
                    {/**INFLUENCING ARROW */}
                    <div style={{marginLeft: '3em', marginTop: '0.2em'}}>
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
                                //backgroundColor: 'papayawhip'
                            }}>

                            <p style={{fontSize: '0.9em'}}>{externalActor.description}</p>

                        </div>
                    </div>
                </div>
                
            )
        } else {
            extActor = (
                <div className="InfluencerRow" style={styles.influencerRow}>
                    <div className="InfluencerContainer" style={styles.influencerContainer}>
                        <AddBtnSVG_1 SVG={ExternalActorIcon} title="Nombre del Actor Externo" description="Description" addElement={addElement} type="externalActor" />
    
                    </div>
                </div>
            )
        }
    
        return extActor
    }


    const renderOrganization = () => {
        var organization;

        var scene = state.workspace.scenes[state.workspace.sceneIndex]
        var externalActor = scene.externalActor

        if(externalActor){
            organization = (
                <div style={styles.litestratContainer}>

                    <div style={styles.organizationHeader}>
                        {/** ORGANIZATION SVG  */}
                        <div style={{display:'flex',justifyContent:'center', alignItems: 'center', marginLeft: '5em'}}>
                            <OrganizationIcon />
                        </div>
                        
                        <div>
                            <p>{externalActor.influencedOrganization}</p>
                        </div>
                        
                    </div>

                    <div style={{position: 'relative', display: 'flex', alignItems: 'baseline', height: '100%', width: '100%'}}>
                    
                        
                        {renderGoalRow()}
                        
                        
                        {renderStrategyRow()}

                        {renderTacticRow()}

                        {renderObjectiveRow()}

                    </div>


                    <div style={{position: 'relative'}}>
                        <div className="ExternalInfluencedActorsContinaer" 
                            style={{
                                position: 'absolute',
                                top: '-600px',
                                left: '1010px',
                                width: '300px',
                                height: '550px',
                                
                            }}
                        >

                            {renderInfluencingActors()}

                            <AddBtnSVG_2 tactics={state.workspace.scenes[state.workspace.sceneIndex].allTactics}  isFirst={scene.influencingActors.length === 0} SVG={ExternalActorIcon} title="Actor Influyente Externo" description="Description" addElement={addElement} type="influencingActor" />


                        </div>

                    </div>

                    
            
                    
                                            
                

                </div>
 
            )
        } else {
            organization = <Fragment/>
        }

        return organization;
    }

    const renderGoalRow = () => {
        var goalRow;
        var scene = state.workspace.scenes[state.workspace.sceneIndex]


        if(scene.organization){
            goalRow = (
                    <div 
                        className="GoalRow" 
                        style={
                            {
                                ...styles.organizationCard,
                                backgroundColor: '#FFFFFF',
                                height: '100%',
                                width: '100%',
                                zIndex: '1'
                                
                            }
                        }
                    >
                                        
                        {renderGoals()}

                    </div>
                

            )
        } else {
            goalRow = <Fragment/>
        }
        

        return goalRow
    }

    const renderGoals = () => {

        var scene = state.workspace.scenes[state.workspace.sceneIndex]

        return(
            <div className="GoalArea" style={{display:'flex',alignItems:'flex-end', width: '85%', height: '100px', marginTop: '1em', marginLeft: '15%'}}>
                                
                {scene.organization.goals.map((goal, index) => {
            
                        return(
                            <GoalView id={goal.id} key={goal.id} goal={goal} onClick={() => selectNode(index, goal, 'goal')} />
            
                        )
            
                })}

                <AddBtnSVG_2 isFirst={scene.organization.goals.length === 0} SVG={GoalIcon} title="Nombre de Meta" description="Description" addElement={addElement} type="goal" />

            </div>

        )
        
    }


    const renderStrategyRow = () => {
        
        var scene = state.workspace.scenes[state.workspace.sceneIndex]
        var strategyRow;

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

    const renderStrategies = () => {

        var scene = state.workspace.scenes[state.workspace.sceneIndex]
        var strategies

        if(scene.goalSelected){
            strategies = (
        
                <div className="StrategyArea" style={{display:'flex',alignItems:'flex-end', width: '85%', height: '100px', marginTop: '1em', marginLeft: '15%'}}>

                    {scene.goalSelected.strategies.map((strategy, index) => {
                        return (
                            <StrategyView id={strategy.id} key={strategy.id} strategy={strategy} onClick={() => selectNode(index, strategy, 'strategy')} />
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

    const renderTacticRow = () => {
        
        var scene = state.workspace.scenes[state.workspace.sceneIndex]
        var tacticRow;

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

    const renderTactics = () => {
        var scene = state.workspace.scenes[state.workspace.sceneIndex]
        var tactics

        if(scene.strategySelected){
            tactics = (
        
                <div className="TacticArea" style={{display:'flex',alignItems:'flex-end', width: '85%', height: '100px', marginTop: '1em', marginLeft: '15%'}}>

                    {scene.strategySelected.tactics.map((tactic, index) => {
                        return (
                            <TacticView options={state.workspace.teams} id={tactic.id} key={tactic.id} tactic={tactic} onClick={() => selectNode(index, tactic, 'tactic')} />
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

    const renderObjectiveRow = () => {
        
        var scene = state.workspace.scenes[state.workspace.sceneIndex]
        var objectiveRow;

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

    const renderObjectives = () => {
        var scene = state.workspace.scenes[state.workspace.sceneIndex]
        var objectives

        if(scene.tacticSelected){
            objectives = (
        
                <div className="ObjectiveArea" style={{display:'flex',alignItems:'flex-start', width: '85%', height: '100%', marginTop: '1em', marginLeft: '15%',flexWrap: 'wrap' }}>

                    {scene.tacticSelected.objectives.map((objective, index) => {
                        return (
                            <ObjectiveView options={scene.tacticSelected.team.roles} id={objective.id} key={objective.id} objective={objective} onClick={() => selectNode(index, objective, 'objective')} />
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


    const renderInfluencingActors = () => {
        var scene = state.workspace.scenes[state.workspace.sceneIndex]

        var iActors =  scene.influencingActors.map((influencingActor) => {

            var icon
            if(influencingActor.isInfluencer){
                //Flecha hacia la organización
                icon = <InfluencingArrowIcon2 />


            } else {
                //Flecha hacia el actor
                icon = <InfluencedArrowIcon/>
            }




            return (
                    <div className="ExternalInflContainerZ" style={{ display: 'flex'}}>
                        <div style={{display: 'flex', alignItems: 'center'}}>
                            {/**Arrow ICON */}
                            {icon}
                        </div>

                        <div>
                            {/**Element ICON */}
                            <InfluencingActorView options={state.workspace.scenes[state.workspace.sceneIndex].allTactics} tactics={state.workspace.scenes[state.workspace.sceneIndex].allTactics} influencingActor={influencingActor} onClick={() => console.log("do nothing... (log)")} />
                        </div>
                    </div>
            )
                
        })

        console.log(iActors)

        return iActors
        
    }

    //Todas las vistas están aqui
    return(
        <Fragment>
            {renderAll()}
        </Fragment>
        
    )

}











// STYLES

const styles = {

    influencedActor: {
        display: 'flex',
        position: 'absolute',
        top: '-30px',
        left: '1090px',
    },

    influencedArrowContainer: {
        display: 'flex',
        position: 'absolute',
        top: '-100px',
        left: '400px'

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

    },

    organizationCard: {
        
        
        position: 'absolute',
        bottom: '0px',
        right: '0px',
        
        borderTopLeftRadius: '4em',
        borderBottomLeftRadius: '4em',
        borderBottomRightRadius: '4em',
    },
    flex: {
        display: 'flex'
    },

    flexRow: {
        display: 'flex',
        flexDirection: 'row'
    },

    flexColumn: {
        display: 'flex',
        flexDirection: 'column',
    },

    centered: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },

    horizontalCentered: {
        display: 'flex',
        justifyContent: 'center',
    },

    verticalCentered: {
        display: 'flex',
        alignItems: 'center'
    },

    padding: {
        padding: '2em'
    },
    organizationHeader: {
        display: 'flex',
        backgroundColor: '#1E4E79',
        fontSize: '2em',
        borderTopLeftRadius:'2em',
        borderTopRightRadius: '2em',
        color: 'whitesmoke',
        fontWeight: '700'
        

    },
    externalActorRow: {
        display: 'flex'
    },

    influencerContainerTransparent: {

        marginLeft: '3em',
        opacity: '0.3'
    },

    influencerContainer: {

        marginLeft: '3em'
    },

    organizationRow: {
        display: 'flex',
        justifyContent: 'center'
    },

    organizationContainer: {
        width: '72px',
        height: '72px',
        
    },

    relativeDivTeam: {
        position: 'relative',
        marginBottom: '3em'
    },

    absoluteDivTeam: {
        position: 'absolute',
        top: '0px',
        right: '10px',
        height: '30px',
        width: '30px',
        zIndex: '5px'
    },
    relativeDivOrg: {
        position: 'relative',
    },

    absoluteDivOrg: {
        position: 'absolute',
        top: '15px',
        left: '-80px',
        height: '30px',
        width: '30px',
        zIndex: '5px'
    },
    body: {
        display: 'flex',
        flexDirection: 'column',
        height: '100vh',
        width: '100vw',
        
    },

    litestratContainer: {
        display: 'flex',
        flexDirection: 'column',
        //marginTop: '3em',
        marginLeft: '15em',
        backgroundColor: 'whitesmoke',
        width: '1000px',
        height: '700px',
        boxShadow: "-2px 2px 10px #9E9E9E",
        borderRadius: '4em'

    },

    lsRow: {
        display: 'flex',
        flexDirection: 'row',
        marginLeft: '2em',
        marginTop: '2em',
    },

    lsColumn: {
        display: 'flex',
        flexDirection: 'column',
        marginLeft: '5em',
        marginTop: '2em'
    },

    column: {
        display: 'flex',
        flexDirection: 'column',
        width: '12em'
    },

    goalContainer: {
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: 'red',
        
        
    }, 
    strategyRow: {
        display: 'flex',
        flexDirection: 'row',
        marginLeft: '5em',
        marginTop: '2em',
        backgroundColor: Gray1
    },

    tacticRow: {
        display: 'flex',
        flexDirection: 'row',
        marginLeft: '5em',
        marginTop: '2em',
        backgroundColor: Gray2
    },

    objectiveColumn: {
        display: 'flex',
        flexDirection: 'column',
        marginLeft: '5em',
        marginTop: '2em',
        backgroundColor: Gray3,
        width: '25em'
    }

    
}





export default Litestrat