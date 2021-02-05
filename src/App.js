import React, { Component } from 'react';
// noinspection ES6CheckImport
import {
    Route,
    Switch,
    Redirect,
    withRouter
} from "react-router-dom"

import Page1 from './components/page1/page1'
import page2 from './components/page2/page2'
import page3 from './components/page3/page3'
import page4 from './components/page4/page4'
import page5 from './components/page5/page5'
import Page6 from './components/page6/page6'
import page7 from './components/page7/page7'
import page8 from './components/page8/page8'

class App extends Component {
    render() {
        const { history } = this.props
        return (
            <div className="App">
                <Switch>
                    <Route history={history} path='/LOG IN' component={Page1} />
                    <Route history={history} path='/CREATE ACCOUNT' component={page2} />
                    <Route history={history} path='/TRY NOW' component={page3} />
                    <Route history={history} path='/SOLUTIONS' component={page4} />
                    <Route history={history} path='/BUSINESS' component={page5} />
                    <Route history={history} path='/PRODUCT' component={Page6} />
                    <Route history={history} path='/NEW/PORTFOLIO' component={page7} />
                    <Route history={history} path='/UPLOAD' component={page8} />
                    <Redirect from='/' to='/LOG IN'/>
                </Switch>
            </div>
        );
    }
}

export default withRouter(App);