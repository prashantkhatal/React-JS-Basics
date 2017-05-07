import React from "react";

export class Footer extends React.Component {


    componentWillMount(){
        console.log('Component will Mount');
    }

    componentDidMount(){
        console.log('Component did Mount');
    }

    componentWillReceiveProps( nextProps ){
        console.log( 'Component will Receive Props', nextProps );
    }

    shouldComponentUpdate( nextProps, nextState ){
        console.log( 'Should Component Update', nextProps, nextState)
        return true;    // if false then will not render and will not execute other methods too
    }

    componentWillUpdate(nextProps, nextState){
        console.log( 'Component will Update ', nextProps, nextState );
    }

    componentDidUpdate(prevProps, prevState){
        console.log( 'Component did Update ', prevProps, prevState );
    }

    componentWillUnmount(){
        console.log( 'component will unmount');
    }

    render() {
        return (
            <footer>
                Contact Us at: <strong>{this.props.contactNumber}</strong>
            </footer>
        );
    }
}