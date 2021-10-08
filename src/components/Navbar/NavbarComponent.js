import React, {Fragment} from 'react'
import NavbarContainer from './NavbarContainer.js'
import NavItem from './NavItem'
import DropdownItemScene from './DropdownItemScene.js'
import DropdownItemShowJSON from './DropdownItemShowJSON.js'
import AddItem from './AddItem.js'

import { useLitestratContext } from '../Litestrat/LitestratContext'
import { useLitestratCrudContext } from '../Litestrat/LitestratCrudContext.js'

const NavbarComponent = () => {

    const {state} = useLitestratContext();
    const renderScenes = () => {
        var scenes;
        if(state.workspace.scenes){
            scenes = state.workspace.scenes.map((scene, index) => (
                <DropdownItemScene scene={scene} index={index}/>
            ))
        } else {
            scenes = <Fragment/>
        }

        return scenes;
    }


    return(
        <NavbarContainer> 
            <NavItem title="Litestrat Web"/>
            <NavItem className="jsonData" title="Datos" isDropdown={true}>
                <DropdownItemShowJSON />
                
            </NavItem>
            <NavItem title="Escenas" isDropdown={true}>
                {renderScenes()}

                <AddItem />
                
            </NavItem>

            
        </NavbarContainer>
    )
}

export default NavbarComponent