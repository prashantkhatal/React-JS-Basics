import React from "react";
import reactDom from "react-dom";

import {Header} from "./components/Header";
import {Home} from "./components/Home";
import {Footer} from "./components/Footer";

class MyElement extends React.Component {

    constructor( props ){
        super();
        this.state = {
            link: 'Home',
            contactNumber: '9403226032'
        };

        setTimeout(()=>this.setState({footerComponentMount: true}), 3000)

    }

    changeHomeLink( newName ){
        this.setState({
            link: newName
        });
    }

    greet(){
        //trying to say hello from other component
        alert('Hello!!');
    }

    toggleMountComponent(){
        this.setState({
            footerComponentMount: !this.state.footerComponentMount
        });
    }

    changeContactNumber(){
        //can be hooked to onClick directly
        // () => this.setState({contactNumber: Math.floor(Math.random() * (9999999999 - 9000000000)) + 9000000000})

        this.setState({
            contactNumber: Math.floor(Math.random() * (9999999999 - 9000000000)) + 9000000000
        });

    }

    render(){
        let info = {surname:'Khatal', hobbies: ['bike riding','repairing']};
        let footerComponent = '';

        if( this.state.footerComponentMount ){
            footerComponent = <Footer contactNumber={this.state.contactNumber}/>
        }

        return (
            <div className="container">
                <div className="row">
                    <div className="col-xs-10 col-xs-offset-1">
                        <Header link={this.state.link}/>
                    </div>
                </div>

                <div className="row">
                    <div className="col-xs-10 col-xs-offset-1">
                        <strong>Component Life Cycle:</strong>
                        <ul>
                            <li>Component will Mount</li>
                            <li>Component did Mount</li>
                            <li>Component will Receive Props <strong>( nextProps )</strong></li>
                            <li>Should Component Update <strong>( nextProps, nextState ) - Must return boolean - if true then render it else no action and next action will not be executed</strong></li>
                            <li>Component will Update <strong>( nextProps, nextState )</strong></li>
                            <li>Component did Update <strong>( prevProps, prevState )</strong></li>
                            <li>component will Unmount - <strong>Executed once the component is unmounted</strong></li>
                        </ul>
                    </div>
                </div>

                <div className="row home-border">
                    <div className="col-xs-10 col-xs-offset-1">
                        <Home
                            name={"Prashant"}
                            initialAge={27}
                            info={info}
                            sayHello={this.greet}
                            changeLinkFromHome={this.changeHomeLink.bind(this)}>
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

                <hr/>
                <div className="row">
                    <div className="col-xs- col-xs-offset-1">
                        <button onClick={this.toggleMountComponent.bind(this)} className="btn btn-primary">(Un)Mount Footer Component</button>
                        &nbsp;<button onClick={this.changeContactNumber.bind(this)} className="btn btn-primary">Change Number</button>
                    </div>
                </div>
                <hr/>
                <div className="row">
                    <div className="col-xs-10 col-xs-offset-1">
                        {/*Examining component lifecycle with footer component*/}
                        {footerComponent}
                    </div>
                </div>

            </div>
        );
    }
}

reactDom.render(<MyElement/>, window.document.getElementById('MyId'));