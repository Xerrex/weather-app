import React from "react";


class Store extends React.Component{
    constructor(props){
        this.state = {
            appName: "Weather app"
        }
    }

    render(){
        return React.Children.map(this.props.children, (child)=>{
            return React.cloneElement(child, {...this.state});
        });
    }
}

export default Store