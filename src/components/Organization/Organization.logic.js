import Goal from "../Goal/Goal.model.js"
import Strategy from "../Strategy/Strategy.model.js"
import Tactic from "../Tactic/Tactic.model.js"
import Objective from "../Objective/Objective.model.js"

export const fillGoals = (power) => {
    var goals = []
    //var isSelected
    var idGoal
    var idTactic
    var idStrategy
    var idObjective
    var title

//id=1,sceneId=null, userId=null, fatherId=null, title, description, until, isSelected, (isVisible=false from ElementLS)
    for(var u=0; u<power; u++ ){

        idGoal = "g"+u
        title = "Title "+idGoal
        goals[u] = new Goal(idGoal, null, null, 1, title, "description", null, false)


        for(var i=0; i<power; i++){
            idStrategy = "g"+u+"s"+i
            title = "Title "+idStrategy
            //isSelected = i=0 ? true : false

            goals[u].strategies[i] = new Strategy(idStrategy, null, null, idGoal, title, "description", null, false)


            for(var o=0; o<power; o++){
                idTactic = "g"+u+"s"+i+"t"+o
                title = "Title "+idTactic
                //isSelected = o=0 ? true : false

                goals[u].strategies[i].tactics[o] = new Tactic(idTactic, null, null, idStrategy, title, "description", null, false)


                for(var p=0; p<power; p++){
                    idObjective = "g"+u+"s"+i+"t"+o+"o"+p
                    title = "Title "+idObjective
                    //isSelected = p=0 ? true : false

                    goals[u].strategies[i].tactics[o].objectives[p] = new Objective(idObjective, null, null, idTactic, title, "description", null, false)
                }
            }
        }
    }


    return goals
}