import React from "react";
import { EventEmitter } from "events"

class Store extends React.Component{
    constructor(props){
        super(props);
        this.eventEmitter = new EventEmitter();
    }

    render(){
        return React.Children.map(this.props.children, (child)=>{
            return React.cloneElement(child, {
                ...this.state,
                eventEmitter: this.eventEmitter
            });
        });
    }
}

export default Store