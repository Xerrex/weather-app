import React from 'react';
import axios from "axios";
import "./app.scss";
import TopSection from "../Top/topSection";
import BottomSection from "../Bottom/bottomSection";

const WEATHER_KEY = "dc06ed8decc9484897f151423192506";

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      cityName:"Doha",
      numforecastDays:5,
      isLoading:true

    };
    //this.getLocationWeather.bind(this);
  }

  getLocationWeather(){
    const { cityName, numforecastDays} = this.state;
    const URL = `http://api.apixu.com/v1/forecast.json?key= ${WEATHER_KEY} &q=${cityName}&days=${numforecastDays}`;
    axios.get(URL)
    .then((res)=>{
      return res.data;
    })
    .then((data)=> {
      this.setState({
        isLoading:false,
        temp_c: data.current.temp_c,
        isDay: data.current.is_day,
        text: data.current.condition.text,
        iconURL: data.current.condition.icon,
        daysForecast: data.forecast.forecastday
      });
    })
    .catch((error)=>{
      if(error) console.error("Cannot fetch weather data from API", error);
    });
  }

  componentDidMount(){
    const { eventEmitter } = this.props;

    this.getLocationWeather();
    eventEmitter.on("updateWeather", (data)=>{
      this.setState({cityName: data}, ()=>this.getLocationWeather());
      console.log("locationName", data);
    });
  }

  render(){
    const  { isLoading, cityName, temp_c, isDay, text, iconURL, daysForecast}= this.state;

    return (
      <div className="app-container">
        <div className="main-container">
          {isLoading && <h3>Loading Weather ...</h3>}
          {!isLoading &&
          <div className="top-section">
            <TopSection
              location={cityName}
              temp_c={temp_c}
              isDay={isDay}
              text= {text}
              iconURL={iconURL}
              eventEmitter={this.props.eventEmitter}
            />
          </div>}
          
          <div className="bottom-section">
            <BottomSection daysForecast={daysForecast}/>
          </div>
        </div>
      </div>
    );
  }
  
}

export default App;
