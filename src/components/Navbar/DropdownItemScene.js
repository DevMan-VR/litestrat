import React, { useState } from 'react'
import '../Litestrat/Litestrat.css'
import { useLitestratCrudContext } from '../Litestrat/LitestratCrudContext'
import Input from '@mui/material/Input';
import { useLitestratContext } from '../Litestrat/LitestratContext';

import SelectIcon from '../../assets/icons/SelectIcon.js'
import RenameIcon from '../../assets/icons/RenameIcon.js'
import RemoveIcon from '../../assets/icons/RemoveIcon.js'


const DropdownItemScene = ({scene, index}) => {
    const {selectElement, addElement, editElement, removeElement} = useLitestratCrudContext()

    const [isEditing, setIsEditing] = useState(false)
    const [rename, setRename] = useState(scene.title)

    const {state} = useLitestratContext()

    let isSelected;
    if(state.workspace.sceneIndex === index){
        isSelected = true;
    } else {
        isSelected = false
    }

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
                <div className={`subItemActionsContainer`}>
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
                <div className={`subItemActionsContainer`}>
                    <a href="#" onClick={() => selectElement(index, scene, 'scene')}> 
                        <div className="subItemActionIcon"> <SelectIcon/> </div>
                    </a>
                    <a href="#" onClick={() => setIsEditing(true)}>
                        <div className="subItemActionIcon"> <RenameIcon/> </div>
                    </a>
                    <a href="#" onClick={() => removeElement('scene',index)}>
                        <div className="subItemActionIcon"> <RemoveIcon/> </div>
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


    var classes = ['subItem']
    if(isSelected){
        classes.push('itemSelected')
    } else {
        classes = ['subItem','']
    }

    return (
        <div className={`${classes[0]} ${classes[1]}`}> 
            {renderTitle()}
            {renderOptions()}
        </div>
    )
}

export default DropdownItemScene