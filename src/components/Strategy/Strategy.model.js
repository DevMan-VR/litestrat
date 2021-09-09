import ElementLS from "../Base/ElementLS.model.js";


class Strategy extends ElementLS {
    constructor(id, sceneId, userId, fatherId, title, description, until, isSelected, tactics=[]) {


        super(id, sceneId, userId, fatherId, title, description, until, isSelected)
        this.tactics = tactics;
    }
}

export default Strategy