import React from "react";

export class Home extends React.Component {
    render(){
        let name= 'Prashant';
        name = "Mr. " + name;
        return(
            <div>
                This is my Content and My Name is {name}
                <br/>
                <br/>
                <div>My Name is {this.props.name} {this.props.info.surname} and I'm {this.props.age} yrs old.</div>
                <br/>
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
    age: React.PropTypes.number,
    info: React.PropTypes.object,
    children: React.PropTypes.element.isRequired
}