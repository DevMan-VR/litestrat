import ElementLS from "../Base/ElementLS.model.js";


class ExternalInfluence extends ElementLS {
    constructor(id, sceneId, userId, title, description, associatedTeam) {


        super(id, sceneId, userId, null, title, description, null, null)
        this.associatedTeam = associatedTeam;
    }
}

export default ExternalInfluence