import React from "react";
import {render} from "react-dom";

import {CodeEditor} from "./components/CodeEditor";
import {TransformedCode} from "./components/TransformedCode";
import {transform} from "babel-core";

class BabelTranformer extends React.Component {

    constructor(props){
        super();
        this.state = {
            input: props.input,
            output: props.output
        }
    }

    updateCode(e){
        console.log('yes here');
        this.setState({
            ...this.state,
            output: transform(e.target.input.value,{presets:['es2015']}).code
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