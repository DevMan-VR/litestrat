import ElementLS from "../Base/ElementLS.model.js";


class Tactic extends ElementLS {
    constructor(id, sceneId, userId, fatherId, title, description, until, isSelected, objectives=[]) {


        super(id, sceneId, userId, fatherId, title, description, until, isSelected)
        this.objectives = objectives;
    }
}

export default Tactic