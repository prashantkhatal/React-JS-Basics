import React from "react";

export class Home extends React.Component {
    render(){
        let name= 'Prashant';
        name = "Mr. " + name;
        return(
            <div>
                This is my Content and My Name is {name}
            </div>
        );
    }
}