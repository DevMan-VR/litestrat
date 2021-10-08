import React, { useState } from 'react'
import '../Litestrat/Litestrat.css'
import { useLitestratCrudContext } from '../Litestrat/LitestratCrudContext'
import Input from '@mui/material/Input';


const DropdownItemScene = ({scene, index}) => {
    const {selectElement, addElement, editElement, removeElement} = useLitestratCrudContext()

    const [isEditing, setIsEditing] = useState(false)
    const [rename, setRename] = useState(scene.title)

    const renderTitle = () => {

        var titleElement;
        const ariaLabel = { 'aria-label': 'description' };

        if(isEditing){
            //Show an input text
            titleElement = (
                <Input 
                    defaultValue={scene.title}
                    inputProps={ariaLabel} 
                    onChange={(e) => setRename(e.target.value)}
                />
            )

        } else {
            titleElement = <span className="sceneName">  {scene.title} </span>
        }

        return titleElement;
    }


    const renderOptions = () => {
        var options;
        if(isEditing) {
            options = (
                <div className="subItemActionsContainer">
                    <a href="#" onClick={() => handleSaveRename()}> 
                        <div className="subItemAction"> OK </div>
                    </a>
                    <a href="#" onClick={() => setIsEditing(false)}> 
                        <div className="subItemAction"> CANCEL </div>
                    </a>
                </div>
            )

        } else {
            options = (
                <div className="subItemActionsContainer">
                    <a href="#" onClick={() => selectElement(index, scene, 'scene')}> 
                        <div className="subItemAction"> SELT </div>
                    </a>
                    <a href="#" onClick={() => setIsEditing(true)}>
                        <div className="subItemAction"> RENM </div>
                    </a>
                    <a href="#" onClick={() => removeElement('scene',index)}>
                        <div className="subItemAction"> DELT </div>
                    </a>
                </div>
            )
        }


        return options;
    }



    const handleSaveRename = () => {
        editElement(null, rename, 'scene')
        setIsEditing(false)
    }

    return (
        <div className="subItem"> 
            {renderTitle()}
            {renderOptions()}
        </div>
    )
}

export default DropdownItemScene