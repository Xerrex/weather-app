import React from 'react';

class ForecastDay extends React.Component{
    constructor(props){
        super(props);
        this.state={};
    }

    render(){
        const {day} = this.props;
        return <div className="forecastday-container">
            <div className="image">
                <img src={day.condition.icon} alt=""/>
            </div>
            <div className="text">
                {day.mintemp_c}&#176; - {day.maxtemp_c}&#176;
                <br/>
                hum:{day.avghumidity}%
                <br/>
                {day.condition.text}
            </div>
        </div>
    }
}

export default ForecastDay