import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

import Landing from './components/LandingPage/Landing.js'
import LitestratApp from './components/Litestrat/Litestrat.main.js'

const App = () => {
    return(
        <Router>
            <Switch>
                <Route path="/" exact component={Landing}/>
                <Route path="/litestrat" exact component={LitestratApp} />
            </Switch>
        </Router>
        
    )
}

export default App;