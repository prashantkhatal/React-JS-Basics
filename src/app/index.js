import React from "react";
import reactDom from "react-dom";

import {Header} from "./components/Header";
import {Home} from "./components/Home";

class MyElement extends React.Component {
    render(){
        let info = {surname:'Khatal', hobbies: ['bike riding','repairing']}
        return (
            <div className="container">
                <div className="row">
                    <div className="col-xs-10 col-xs-offset-1">
                        <Header link="Home"/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-10 col-xs-offset-1">
                        <Home name={"Prashant"} initialAge={27} info={info}>
                            <p>Yes this is content inside <strong>Home Tag</strong> and can be accessed using <strong>this.props.children</strong></p>
                        </Home>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-10 col-xs-offset-1">
                        <h1>Title</h1>
                        <p>
                            This is My First element.<br/>
                            Use React obj to specify urs tech component and reactDom to render it.
                        </p>
                    </div>
                </div>

            </div>
        );
    }
}

reactDom.render(<MyElement/>, window.document.getElementById('MyId'));