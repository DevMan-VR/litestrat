import ElementLS from "../Base/ElementLS.model.js";


class ExternalActor extends ElementLS {
    constructor(id, sceneId, userId, title, description, influencedOrganization) {


        super(id, sceneId, userId, null, title, description, null, null)
        this.influencedOrganization = influencedOrganization;
    }
}

export default ExternalActor