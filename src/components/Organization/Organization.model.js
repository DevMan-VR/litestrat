'use strict';

import ElementLS from "../Base/ElementLS.model.js";
import {fillGoals} from './Organization.logic.js'

class Organization extends ElementLS{
    constructor(id=1,sceneId=null, userId=null, fatherId=null, name="dummy") {
        super(id, sceneId, userId,fatherId)

        this.name = name;
        this.goals = [...fillGoals(0)]

    }

}

export default Organization