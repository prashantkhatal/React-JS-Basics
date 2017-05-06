import React from "react";
import reactDom from "react-dom";

class MyElement extends React.Component {
    render(){
        return (
            <div className="container">
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