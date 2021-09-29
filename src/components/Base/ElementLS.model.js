
class ElementLS {
    constructor(id,sceneId=null, userId=null, fatherId=null, title, description, until, isSelected, isVisible=false) {
        this.id = id;
        this.sceneId = sceneId;
        this.userId = userId;
        this.fatherId = fatherId;

        this.title = title;
        this.description = description;
        this.until = until;
        this.isSelected = isSelected;
        this.isVisible = isVisible;
    }
}

export default ElementLS