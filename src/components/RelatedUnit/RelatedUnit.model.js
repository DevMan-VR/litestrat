import ElementLS from "../Base/ElementLS.model.js";


class RelatedUnit extends ElementLS {
    constructor(id, sceneId, userId, title, description, associatedTeam={}) {


        super(id, sceneId, userId, null, title, description, null, null)
        this.associatedTeam = associatedTeam;

    }
}

export default RelatedUnit