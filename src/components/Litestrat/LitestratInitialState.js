import { teamsDummy } from "../../data/dummy"
import Scene from "../Scene/Scene.model.js"
export const initialState = {

    workspace: {
        teams: teamsDummy,
        sceneIndex: 0,
        scenes: [new Scene(1,1,"Escenario 1")], 
    }
}