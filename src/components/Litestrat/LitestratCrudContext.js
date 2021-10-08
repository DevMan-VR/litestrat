import React, {useState, useContext} from 'react'
import { useLitestratContext } from './LitestratContext'

//Models
import Organization from '../Organization/Organization.model.js';
import Goal from '../Goal/Goal.model.js';
import Strategy from '../Strategy/Strategy.model.js';
import Tactic from '../Tactic/Tactic.model.js';
import Objective from '../Objective/Objective.model.js';
import ExternalActor from '../ExternalActor/ExternalActor.model.js';
import ExternalInfluence from '../InfluencingActor/InfluencingActor.model.js';

const LitestratCrudContext = React.createContext()

export const useLitestratCrudContext = () => {
    return useContext(LitestratCrudContext)
}

const LitestratCrudProvider = ({children}) => {

    const {state, setState} = useLitestratContext()



    const addElement = (type, data) => {

        //Getting a clone object of current scene
        var scene = state.workspace.scenes[state.workspace.sceneIndex]
        var updatedScene = {...scene}
    
        switch(type) {


            case 'scene':
                var newState = {...state}
                newState.workspace.scenes.push(data);
                setState(newState)

                break;
            case 'externalActor':
    
                var index = Math.floor(Math.random()*10)
                var idExternalActor = "EX_ACT"+index

                var externalActor = new ExternalActor(idExternalActor,null,null,data.title,data.influenceDescription,data.influencedOrganization)
                
                //Adding External Actor & Organization
                updatedScene.externalActor = externalActor
                updatedScene.organization = new Organization()
                var scenes = [...state.workspace.scenes]
                scenes[state.workspace.sceneIndex] = updatedScene
                var newState = {...state}
                newState.workspace.scenes = scenes

                setState(newState)

                break;

            case 'externalInfluence':
    
                var index = Math.floor(Math.random()*10)
                var idExternalInfluence = "EX_ACT_INF"+index

                var externalInfluence = new ExternalInfluence(idExternalInfluence,null,null,data.title,data.description,data.associatedTactic)
                externalInfluence.isInfluencer = data.isInfluencer

                //Adding External Influencer & Organization
                updatedScene.externalInfluences.push(externalInfluence)
                var scenes = [...state.workspace.scenes]
                scenes[state.workspace.sceneIndex] = updatedScene
                var newState = {...state}
                newState.workspace.scenes = scenes

                setState(newState)
                break;
    
    
            case 'goal':
    
                var index = Math.floor(Math.random()*10)
                var idGoal = "g"+index
    
                var goal = new Goal(idGoal,null,null,null,data.title,data.description,data.until,false)

                //Adding a new Goal
                updatedScene.organization.goals.push(goal)
                var scenes = [...state.workspace.scenes]
                scenes[state.workspace.sceneIndex] = updatedScene
                var newState = {...state}
                newState.workspace.scenes = scenes

                setState(newState)
                break;
            
            case 'strategy':
    
                var idGoal = state.workspace.scenes[state.workspace.sceneIndex].goalSelected.id
                var index = Math.floor(Math.random()*10)
                var idStrategy =  idGoal+"s"+index
                var goalSelected = state.workspace.scenes[state.workspace.sceneIndex].goalSelected

                var strategy = new Strategy(idStrategy,null,null,idGoal,data.title,data.description,data.until,false)

                var newState = {...state}
                newState.workspace.scenes[newState.workspace.sceneIndex].organization.goals[goalSelected.index].strategies.push(strategy)

                setState(newState)
                break;
    
            case 'tactic':
                

                var idStrategy =  scene.strategySelected.id
                var index = Math.floor(Math.random()*10)
                var idTactic =  idStrategy+"t"+index
                var goalSelected = updatedScene.goalSelected
                var strategySelected = updatedScene.strategySelected
    
                var tactic = new Tactic(idTactic,null,null,idStrategy,data.title,data.description,data.until,false)
                
                var teamIndex = state.workspace.teams.findIndex( team => team.title === data.team.value)
                var newState = {...state}

                if(teamIndex === -1){
                    //console.log("Se ha creado un nuevo team")
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
                    //console.log("Se ha encontrado el team que se buscaba")
                    tactic.teamIndex = teamIndex
                    tactic.team = newState.workspace.teams[teamIndex]
                }
                
    
                newState.workspace.scenes[newState.workspace.sceneIndex].allTactics.push(tactic)
                newState.workspace.scenes[newState.workspace.sceneIndex].organization.goals[goalSelected.index].strategies[strategySelected.index].tactics.push(tactic)
                
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

    const editElement = (index=null, updatedElement, type ) => {

        var sceneIndex = state.workspace.sceneIndex
        var scene = state.workspace.scenes[sceneIndex]
        var updatedScene = {...scene}
        var newState = {...state}

        switch(type){
            case 'scene': updatedScene.title = updatedElement; break;
            case 'externalActor': updatedScene.externalActor = {...updatedElement}; break;
            case 'goal': updatedScene.organization.goals[index] = {...updatedElement}; break;
            case 'strategy': updatedScene.organization.goals[scene.goalSelected.index].strategies[index] = {...updatedElement}; break;
            case 'tactic': updatedScene.organization.goals[scene.goalSelected.index].strategies[scene.strategySelected.index].tactics[index] = {...updatedElement}; break;
            case 'objective': updatedScene.organization.goals[scene.goalSelected.index].strategies[scene.strategySelected.index].tactics[scene.tacticSelected.index].objectives[index] = {...updatedElement}; break;
            case 'externalInfluence': updatedScene.externalInfluences[index] = {...updatedElement}; break;
            case 'team': updatedScene.selectedTeam = {...updatedElement}; break;
            case 'role': updatedScene.selectedRole = {...updatedElement}; break;
        }

        //console.log("This is the received element: ", updatedElement)
        //console.log("This is the updatedScene after edited element: ", updatedScene)

        newState.workspace.scenes[sceneIndex] = {...updatedScene}

        setState(newState)
    }

    const currentSelect = (oldScene, newScene, element) => {
        if(oldScene.currentSelect){
            oldScene.currentSelect.currentSelect = false
        }

        newScene.currentSelect = element;
        newScene.currentSelect.currentSelect = true

        return newScene
    }

    //Select Element FX
    const selectElement = (index, element, type) => {

        var oldScene = state.workspace.scenes[state.workspace.sceneIndex]
        var updatedScenes = [...state.workspace.scenes]
        var scene = {...state.workspace.scenes[state.workspace.sceneIndex]}

        switch(type) {

            case 'scene':
                var newState = {...state}
                newState.workspace.sceneIndex = index;
                setState(newState)
                return
                

            case 'externalActor':

                scene.externalActorSelected = false;
                var externalActor = element;
                externalActor.isSelected = !externalActor.isSelected;
                scene.externalActorSelected = externalActor

                scene = currentSelect(oldScene, scene, externalActor)

                console.log("Selecting external actor: ", element)
                updatedScenes[state.workspace.sceneIndex] = scene

            break;


            case 'externalInfluence':

                var externalInfluence = element;
                externalInfluence.isSelected = !externalInfluence.isSelected;
                scene.externalInfluenceSelected = externalInfluence
                scene.externalInfluences[index] = externalInfluence

                scene = currentSelect(oldScene, scene, externalInfluence)

                console.log("Selecting external influence: ", element)
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
            scene.organization.goals[index].isSelected = true;

            scene = currentSelect(oldScene, scene, goal)

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

            scene = currentSelect(oldScene, scene, strategy)


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
            //scene.goals[scene.goalSelected.index].strategies[scene.strategySelected.index].tactics[index].isSelected = true;
            scene = currentSelect(oldScene, scene, tactic)

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

            scene = currentSelect(oldScene, scene, objective)

            
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


    const removeElement = (type, index=null) => {
        console.log("[CRUD CONTEXT] Remove element is implemented")
        var sceneIndex = state.workspace.sceneIndex
        var scene = state.workspace.scenes[sceneIndex]
        var updatedScene = {...scene}
        var newState = {...state}

        switch(type){
            case 'scene':
                newState.workspace.scenes.splice(index, 1);
                setState(newState)
                return;
            case 'externalActor':
                updatedScene.externalActor = null
                updatedScene.externalActorSelected = null
                break;

            case 'externalInfluence':
                var externalInfluenceSelected = scene.externalInfluenceSelected
                updatedScene.externalInfluences.splice(externalInfluenceSelected.index, 1)
                updatedScene.externalInfluenceSelected = null
                break;

            case 'goal':
                var goalSelected = scene.goalSelected
                updatedScene.organization.goals.splice(goalSelected.index, 1)
                updatedScene = cleanSelecteds(updatedScene, 'goal')
                break;

            case 'strategy':
                var goalSelected = scene.goalSelected;
                var strategySelected = scene.strategySelected;
                updatedScene.organization.goals[goalSelected.index].strategies.splice(strategySelected.index, 1)
                updatedScene = cleanSelecteds(updatedScene, 'strategy')
                break;

            case 'tactic':
                var goalSelected = scene.goalSelected;
                var strategySelected = scene.strategySelected;
                var tacticSelected = scene.tacticSelected;
                updatedScene.organization.goals[goalSelected.index].strategies[strategySelected.index].tactics.splice(tacticSelected.index, 1)
                updatedScene = cleanSelecteds(updatedScene, 'tactic')
                break;

            case 'objective':
                var goalSelected = scene.goalSelected;
                var strategySelected = scene.strategySelected;
                var tacticSelected = scene.tacticSelected;
                var objectiveSelected = scene.objectiveSelected;
                updatedScene.organization.goals[goalSelected.index].strategies[strategySelected.index].tactics[tacticSelected.index].objectives.splice(objectiveSelected.index, 1)
                updatedScene = cleanSelecteds(updatedScene, 'objective')
                break;
            
        }

        newState.workspace.scenes[sceneIndex] = updatedScene
        setState(newState)
    }


    const cleanSelecteds = (updatedScene, type) => {
        switch(type){
            case 'goal':
                if(updatedScene.goalSelected){
                    updatedScene.goalSelected = null

                    if(updatedScene.strategySelected){
                        updatedScene.strategySelected = null

                        if(updatedScene.tacticSelected){
                            updatedScene.tacticSelected = null

                            if(updatedScene.objectiveSelected){
                                updatedScene.objectiveSelected = null
                            }
                        }
                    }
                }

                break;
            
            case 'strategy': 
                if(updatedScene.strategySelected){
                    updatedScene.strategySelected = null

                    if(updatedScene.tacticSelected){
                        updatedScene.tacticSelected = null

                        if(updatedScene.objectiveSelected){
                            updatedScene.objectiveSelected = null
                        }
                    }
                }

                break;

            case 'tactic':
                if(updatedScene.tacticSelected){
                    updatedScene.tacticSelected = null

                    if(updatedScene.objectiveSelected){
                        updatedScene.objectiveSelected = null
                    }
                }

                break;

            case 'objective':
                if(updatedScene.objectiveSelected){
                    updatedScene.objectiveSelected = null
                }

                break;

        }

        return updatedScene
    }



    return(
        <LitestratCrudContext.Provider value={{addElement, editElement, selectElement, removeElement}}>
            {children}
        </LitestratCrudContext.Provider>

    )
    
}


export default LitestratCrudProvider