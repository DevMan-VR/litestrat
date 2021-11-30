import React, {useState, useContext, useEffect} from 'react'
import { initialState, tutorialState } from './LitestratInitialState'

const LitestratContext = React.createContext()

export const useLitestratContext = () => {
    return useContext(LitestratContext)
}

const LitestratProvider = ({children, isTutorial=false}) => {


    let theState
    if(isTutorial){
        theState = tutorialState
    }else {
        theState = initialState
    }
    const [state, setState] = useState(theState)

    useEffect(() => {
        console.log("El nuevo estado de Litestrat es: ", state)
    }, [state])


    return(
        <LitestratContext.Provider value={{state, setState}}>
            {children}
        </LitestratContext.Provider>

    )
    
}


export default LitestratProvider