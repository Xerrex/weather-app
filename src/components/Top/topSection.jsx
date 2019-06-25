import React from "react";
import "./style.scss";
import Weather from "./weather";

class TopSection extends React.Component{
    constructor(props){
        super(props);
        this.state = {}
    }
    render(){
        return (
            <div className="top-container">
                <div className="title">Weather</div>
                <Weather/>
                <button className="btn btn-select-location">Select Location</button>
            </div>
        );
    }
}

export default TopSection;