import React from "react";
import {render} from "react-dom";

import {CodeEditor} from "./components/CodeEditor";
import {TransformedCode} from "./components/TransformedCode";

class BabelTranformer extends React.Component {

    constructor(props){
        super();
        this.state = {
            input: props.input,
            output: props.output
        }
    }

    updateCode(e){
        this.setState({
            ...this.state,
            output: e.target.value.toUpperCase()    //Need to Update code using babel transform
        });
    }

    render(){
        return (
            <div className="container">
                <div className="row">
                    <CodeEditor updateCodes={this.updateCode.bind(this)} />
                    <TransformedCode {...this.state}/>
                </div>
            </div>
        );
    }
}

BabelTranformer.defaultProps = {
    input:'() => {return "Yes return"}',
    output: 'great'
}

render(<BabelTranformer/>, window.document.getElementById('MyId'))