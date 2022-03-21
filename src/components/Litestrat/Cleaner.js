
export const cleanObjective = (objective) => {
    objective.isSelected = false
    objective.currentSelect = false
    return objective

}

export const cleanExternaInfluence = (externalInfluence) => {
    externalInfluence.isSelected = false
    externalInfluence.currentSelect = false
    return externalInfluence

}

export const cleanExternalUnit = (externalUnit) => {
    externalUnit.isSelected = false
    externalUnit.currentSelect = false
    return externalUnit
}

export const cleanTactic = (tactic) => {
    tactic.isSelected = false
    tactic.currentSelect = false

    if(tactic.externalInfluences && tactic.externalInfluences.length > 0){
        tactic.externalInfluences = tactic.externalInfluences.map((externalInfluence) => {
            return {
                ...cleanExternaInfluence(externalInfluence)
            }
        })
    }

    if(tactic.externalUnits && tactic.externalUnits.length > 0){
        tactic.externalUnits = tactic.externalUnits.map((externalUnit) => {
            return {
                ...cleanExternalUnit(externalUnit)
            }
        })
    }
    
    if(tactic.objectives && tactic.objectives.length > 0){
        tactic.objectives = tactic.objectives.map((objective) => {
            return {
                ...cleanObjective(objective)
            }
        })
    }

    return tactic
}

export const cleanStrategy = (strategy) => {
    strategy.isSelected = false
    strategy.currentSelect = false
    if(strategy.tactics && strategy.tactics.length > 0){
        strategy.tactics = strategy.tactics.map((tactic) => {
            return {
                ...cleanTactic(tactic)
            }
        })
    }
    return strategy
}

export const cleanGoal = (goal) => {
    console.log("cleanGoal: goal is: ", goal)
    goal.isSelected = false
    goal.currentSelect = false
    if(goal.strategies && goal.strategies.length > 0){
        goal.strategies = goal.strategies.map((strategy) => {
            return {
                ...cleanStrategy(strategy)
            }
        })
    }
    

    return goal

}

export const cleanScene = (scene) => {
    scene = scene.goals.map((goal) => {
       return{
        ...cleanGoal(goal)
       } 
    })

    
    return scene
}
    


