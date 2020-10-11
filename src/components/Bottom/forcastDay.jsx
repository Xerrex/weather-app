import React from 'react';

class ForecastDay extends React.Component{
    constructor(props){
        super(props);
        this.state={};
    }


    render(){
        const {forecast} = this.props;

        const today = new Date(forecast.dt*1000);

        const days=["Sun", "Mon", "Tue","Wed", "Thurs","Fri", "Sat"];
        const base_iconURL = "http://openweathermap.org/img/wn/";

        return <div className="forecastday-container">
            <div className="image">
                <img src={`${base_iconURL}${forecast.weather[0].icon}@2x.png`} alt="weather icon"/>
            </div>
            <div className="text">
                {days[today.getDay()]}
                <br/>
                {forecast.temp.min}&#176; - {forecast.temp.max}&#176;
                <br/>
                Humdity: {forecast.humidity}%
                <br/>
                {forecast.weather[0].description}
            </div>
        </div>
    }
}

export default ForecastDay