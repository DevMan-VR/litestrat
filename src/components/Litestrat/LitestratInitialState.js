import { teamsDummy } from "../../data/dummy"
export const initialState = {

    workspace: {
        teams: teamsDummy,
        sceneIndex: 0,
        scenes: 
            [
                {
                    organization: null,
                    externalActorSelected: null,
                    goalSelected: null,
                    strategySelected: null,
                    tacticSelected: null,
                    objectiveSelected: null,
                    teamSelected: null,
                    roleSelected: null,
                    externalInfluenceSelected: null,
                    allTactics: [],
                    externalInfluences: [],
                    currentSelected: null
                
                }
        ],

        
    }
}