'use strict';

class Scene {

    constructor(id=1,sceneId=null, title="dummy") {
        this.id = id
        this.sceneId = sceneId
        this.title = title
        this.description = null
        this.organization =  null
        this.externalActorSelected = null
        this.goalSelected = null
        this.strategySelected = null
        this.tacticSelected = null
        this.objectiveSelected = null
        this.teamSelected = null
        this.roleSelected = null
        this.externalInfluenceSelected = null
        this.currentSelected = null
        this.allTactics = []
        this.relatedUnits = []
        this.externalInfluences = []
    }

}

export default Scene