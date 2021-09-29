import ElementLS from "../Base/ElementLS.model.js";


class ExternalInfluence extends ElementLS {
    constructor(id, sceneId, userId, title, description, associatedTactic) {


        super(id, sceneId, userId, null, title, description, null, null)
        this.associatedTactic = associatedTactic;
    }
}

export default ExternalInfluence