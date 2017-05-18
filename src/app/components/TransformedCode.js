import React from "react";

export class TransformedCode extends React.Component {

    render(){
        return (
            <div className="col-xs-1">
                {this.props.output}
            </div>
        );
    }
}