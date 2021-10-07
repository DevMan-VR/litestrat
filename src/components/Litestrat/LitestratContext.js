import React, {useState, useContext, useEffect} from 'react'
import { initialState } from './LitestratInitialState'

const LitestratContext = React.createContext()

export const useLitestratContext = () => {
    return useContext(LitestratContext)
}

const LitestratProvider = ({children}) => {
    const [state, setState] = useState(initialState)

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