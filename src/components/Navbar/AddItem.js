import React from 'react'
import '../Litestrat/Litestrat.css'
import { useLitestratCrudContext } from '../Litestrat/LitestratCrudContext'
import { useLitestratContext } from '../Litestrat/LitestratContext'

import Scene from '../Scene/Scene.model'

const AddItem = () => {
    
    const {state} = useLitestratContext();
    const {selectElement, addElement, editElement, removeElement} = useLitestratCrudContext()

    const newIndex = state.workspace.scenes.length +1
    const newScene = new Scene();

    newScene.title = "Escenario " + newIndex

    return (
        <div className="subItem"> 
            <span className="sceneName">  Nueva escena </span>
            <div className="subItemActionsContainer">
                <a href="#" onClick={() => addElement("scene", newScene)}> 
                    <div className="subItemAction"> CREAR </div>
                </a>
            </div>
        </div>
    )
}

export default AddItem;