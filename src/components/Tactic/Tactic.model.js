import ElementLS from "../Base/ElementLS.model.js";


class Tactic extends ElementLS {
    constructor(id, sceneId, userId, fatherId, title, description, until, isSelected, objectives=[], team={}, externalInfluences=[], relatedUnits=[]) {


        super(id, sceneId, userId, fatherId, title, description, until, isSelected)
        this.objectives = objectives;
        this.team = team;
        this.externalInfluences = externalInfluences;
        this.relatedUnits = relatedUnits;
    }
}

export default Tactic