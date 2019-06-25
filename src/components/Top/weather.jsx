import React from "react";
import sunny from '../../resources/sun.png'

class Weather extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="weather-container">
                <div className="header">Location Name</div>
                <div className="inner-container">
                    <div className="image">
                        <img src={sunny} alt="pic here"/>
                    </div>
                    <div className="current-weather">10 </div>
                </div>
                <div className="footer">sunny</div>
            </div>
        );
    }
}

export default Weather;