import React from "react";
import "./style.scss";

import ForecastDay from './forcastDay';

class BottomSection extends React.Component{
    constructor(props){
        super(props);
        this.state = {};
    }
    render(){
        const {daysForecast} = this.props;

        return <div className="bottom-container">
            <div className="inner-container">
                {daysForecast &&
                    daysForecast.map((dayForecast, index)=> {
                        return <ForecastDay key={index} day={dayForecast.day}/>
                })}
            </div>
        </div>
    }
}

export default BottomSection;