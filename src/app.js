import React, { Component } from 'react';
import { Router, Switch, Route } from "react-router-dom";

import Login from './components/login';
import Home from './components/dashboard';
import history from './history';

class App extends Component {
    

    render() {
        // console.log('isLogin==>', localStorage.getItem('is-login'))
        if(localStorage.getItem('is-login') === null) {
            history.push('/login');
        } else {
            history.push('/dashboard');
        }
        return (
            <Router history={history}>
                <Switch>
                    <Route exact path="/" component={Login} />
                    <Route exact path="/login" component={Login} />
                    <Route exact path="/dashboard" component={Home} />
                </Switch>
            </Router>
            // <div className="ui container" style={{ marginTop: '30px', backgroundColor: "azure" }}>
            //     <Login />
            // </div>
        )
    }
}

export default App;