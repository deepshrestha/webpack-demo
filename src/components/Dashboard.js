import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Header from './Header'
import Footer from './Footer'
import Menu from './Menu'
import Page1 from './Page1'
import Page2 from './Page2'

const Dashboard = () => {    
    return(
        <Router>
            {/* {props.children} */}
            <Header />
            <Menu/>
                <Switch>
                    <Route exact path="/p1" component={Page1} />
                    <Route path="/p2" component={Page2} />
                </Switch>
            <Footer/>
        </Router>
    )
}

export default Dashboard