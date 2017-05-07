import React from "react";


//Stateless component - where the state of this component will not be changed
export const Header = (props) => {
    return(
        <nav className="navbar navbar-default">
            <div className="container">
                <div className="navbar-header">
                    <ul className="nav navbar-nav">
                        <li><a href="#">{props.link}</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}