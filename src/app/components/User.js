import React from "react";

export class User extends React.Component {

    render() {
        return(
            <div>
                <br/>UserName:<strong>{this.props.params.name}</strong>
                <br/>ID:<strong>{this.props.params.id}</strong>
            </div>
        );
    }
}