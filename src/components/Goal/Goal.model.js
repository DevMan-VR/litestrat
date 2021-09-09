import ElementLS from "../Base/ElementLS.model.js";

class Goal extends ElementLS {
    constructor(id, sceneId, userId, fatherId, title, description, until, isSelected, strategies=[]) {


        super(id, sceneId, userId, fatherId, title, description, until, isSelected)
        this.strategies = strategies;
    }
}

export default Goal