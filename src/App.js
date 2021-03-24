import React from 'react'
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom'

import Login from './components/Login'
import Dashboard from './components/Dashboard'
/* import Page1 from './components/Page1'
import Page2 from './components/Page2'
import Header from './components/Header'
import Footer from './components/Footer'
import Menu from './components/Menu' */

import Menu from './components/Menu'

const App = () => {
    return(
        <Router>            
            <Route exact path='/' component={Login} />
            <Route path='/dashboard' component={Dashboard} />
        </Router>
    )
}

export default App