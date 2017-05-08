import React from "react";
import { render } from "react-dom";
import { Router, Route, browserHistory } from "react-router";

import {Root} from "./components/Root";
import {RouterHome} from "./components/RouterHome";
import {User} from "./components/User";

class MainApp extends React.Component {
    render() {
        return (
            <Router history={browserHistory}>
                <Route path="/" components={Root}/>
                <Route path="/" components={Root}>
                    <Route path="Home" components={RouterHome}/>
                    <Route path="User(/:id)(/:name)" components={User}/>
                </Route>
            </Router>
        );
    }
}

render(<MainApp/>, window.document.getElementById('MyId'));