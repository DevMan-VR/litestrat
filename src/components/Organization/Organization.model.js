'use strict';

import ElementLS from "../Base/ElementLS.model.js";
import {fillGoals} from './Organization.logic.js'

class Organization extends ElementLS{
    constructor(id=1,sceneId=null, userId=null, fatherId=null, name="dummy") {
        super(id, sceneId, userId,fatherId)

        this.name = name;
        this.goalSelected = null
        this.strategySelected = null
        this.tacticSelected = null
        this.goals = [...fillGoals(2)]

    }

}

export default Organization