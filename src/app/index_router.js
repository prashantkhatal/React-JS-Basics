import React from "react";
import { render } from "react-dom";
import { Router, Route, browserHistory } from "react-router";

import Root from './components/Root';
import RouterHome from './components/RouterHome'

console.log(browserHistory)

class MainApp extends React.Component {
    render() {
        return (
            <Router history={browserHistory}>
                <Route path="Root" component={Root}/>
            </Router>
        );
    }
}

render(<MainApp/>, window.document.getElementById('MyId'));