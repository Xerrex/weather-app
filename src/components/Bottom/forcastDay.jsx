import React from 'react';

class ForecastDay extends React.Component{
    constructor(props){
        super(props);
        this.state={};
    }

    render(){
        const {forecast} = this.props;
        const today = new Date(`${forecast.date}`);
        const days=["Sun", "Mon", "Tue","Wed", "Thurs","Fri", "Sat"];

        return <div className="forecastday-container">
            <div className="image">
                <img src={forecast.day.condition.icon} alt=""/>
            </div>
            <div className="text">
                {days[today.getDay()]}
                <br/>
                {forecast.day.mintemp_c}&#176; - {forecast.day.maxtemp_c}&#176;
                <br/>
                Humdity: {forecast.day.avghumidity}%
                <br/>
                {forecast.day.condition.text}
            </div>
        </div>
    }
}

export default ForecastDay