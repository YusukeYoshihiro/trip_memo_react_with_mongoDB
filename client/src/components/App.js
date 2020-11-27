import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';

import Header from './Header';
import Landing from "./Landing";
import Main from "./Main";


class App extends Component {

    componentDidMount() {
        this.props.fetchUser();
    }
    
    // What is "exact" in <Route exact path="/" component={...}/>
    //  https://qiita.com/gombeedoe/items/6f4ea0e37775bac01c0d
    render() {
        return (
            <div className="container">
                <BrowserRouter>
                    <div>
                        <Header/>
                        <Switch>
                            <Route exact path="/" component={Landing}/>
                            <Route path="/main" component={Main}/>
                        </Switch>
                    </div>
                </BrowserRouter>
            </div>
        )
    }
}

export default connect(null, actions)(App)
