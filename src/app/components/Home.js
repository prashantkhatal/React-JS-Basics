import React from "react";

export class Home extends React.Component {
    constructor(props){
        super();
        this.state = {
            age: props.initialAge
        }
    }

    changeLink(){
        //Alternante way - directly on click of button
        //this.props.changeLinkFromHome.bind(this, 'change it')
        let link = window.document.getElementById('linkName').value;
        ( link ) ? this.props.changeLinkFromHome( link )  : '';
    }

    increaseMyAge(){
        this.setState({
            age: this.state.age + 3
        });
    }

    render(){
        let name= 'Prashant';
        name = "Mr. " + name;
        return(
            <div>
                This is my Content and My Name is {name}
                <br/><br/>
                <div>
                    <p>My Name is {this.props.name} {this.props.info.surname} and I'm <strong>{this.state.age}</strong> yrs old.</p>
                    <button onClick={() => this.increaseMyAge()} className="btn btn-primary">Increase My Age</button>
                    <hr/>
                    From Other component - other component method call
                    <br/><br/>
                    <button onClick={this.props.sayHello} className="btn btn-primary">Say Hello</button>
                    <hr/>
                    Enter Link Name:  <input className="form-control input-lg" placeholder="Enter Link Name" id="linkName" type="text"/>
                    <br/>
                    <button onClick={()=>this.changeLink()} className="btn btn-primary">Change Link</button>
                </div>
                <hr/><br/>
                My hobbies are :
                <ul>
                    {this.props.info.hobbies.map((hobby, i)=> <li key={i}>{hobby}</li>)}
                </ul>
                <br/>
                <div>
                    {this.props.children}
                </div>
            </div>
        );
    }
}

Home.propTypes = {
    name: React.PropTypes.string,
    initialAge: React.PropTypes.number,
    info: React.PropTypes.object,
    children: React.PropTypes.element.isRequired
}