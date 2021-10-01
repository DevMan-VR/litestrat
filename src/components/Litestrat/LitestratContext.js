import React, {useState, useContext} from 'react'
import { initialState } from './LitestratInitialState'

const LitestratContext = React.createContext()

export const useLitestratContext = () => {
    return useContext(LitestratContext)
}

const LitestratProvider = ({children}) => {
    const [state, setState] = useState(initialState)


    return(
        <LitestratContext.Provider value={{state, setState}}>
            {children}
        </LitestratContext.Provider>

    )
    
}


export default LitestratProvider