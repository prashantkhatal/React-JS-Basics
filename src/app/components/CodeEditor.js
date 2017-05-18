import React from "react";

export class CodeEditor extends React.Component {
    render(){
        return (
            <div className="col-xs-6">
                <textarea onChange={this.props.updateCodes} cols="65" rows="30"></textarea>
            </div>
        );
    }
}